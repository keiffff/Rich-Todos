import * as React from 'react';
import { css } from 'emotion';
import ClassNames from 'classnames';
import { Fab, Tooltip } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { LoadingScreen } from '../LoadingScreen';
import { Task, TaskStatus } from '../../models/models';
import { TaskForm } from '../TaskForm';
import { ConfirmDialog } from '../ConfirmDialog';
import { Breadcrumbs } from '../Breadcrumbs';
import { taskLabelTexts } from '../../constants/constants';
import { paths } from '../../constants/paths';
import { useTaskFormError } from '../../hooks/useTaskFormError';

type Props = {
  onUpdateTask: ({
    taskAttributeWithoutId,
  }: {
    taskAttributeWithoutId: Pick<Task, 'title' | 'content' | 'labels' | 'status'>;
  }) => void;
  title: string;
  content: string;
  status: TaskStatus;
  labels: string[];
  onChangeTitle: (value: string) => void;
  onChangeContent: (value: string) => void;
  onChangeStatus: (value: TaskStatus) => void;
  onChangeLabels: (value: string[]) => void;
  onReset: () => void;
  loading: boolean;
};

const baseStyle = css({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 40,
  paddingBottom: 72,
});

const offsetStyle = css({
  paddingTop: 72,
});

const breadcrumbsContainerStyle = css({
  margin: '16px 0 0 32px',
});

const formContainerStyle = css({
  width: '70%',
  padding: `40px 64px 64px`,
  border: '1px solid #d3d3d3',
  borderRadius: 8,
});

const deleteButtonContainerStyle = css({
  position: 'fixed',
  bottom: 20,
  right: 20,
});

const linkItems = [{ name: 'Home', to: paths.basePath }];

export const TaskShow = ({
  onUpdateTask,
  title,
  content,
  status,
  labels,
  onChangeTitle,
  onChangeContent,
  onChangeStatus,
  onChangeLabels,
  onReset,
  loading,
}: Props) => {
  const [error, setError] = React.useState(false);
  const [confirmDialogVisible, setConfirmDialogVisible] = React.useState(false);
  const { titleError, contentError, errorCondition } = useTaskFormError({
    error,
    title,
    content,
  });
  const handleClickSubmit = React.useCallback(() => {
    setError(errorCondition);
    if (errorCondition) return;
    onUpdateTask({
      taskAttributeWithoutId: { title, content, status, labels },
    });
    setError(false);
    onReset();
  }, [errorCondition, title, content, status, labels]);
  const handleOpenConfirmDialog = React.useCallback(() => setConfirmDialogVisible(true), []);
  const handleCloseConfirmDialog = React.useCallback(() => setConfirmDialogVisible(false), []);
  React.useEffect(() => () => onReset(), []);

  return (
    <>
      <div className={ClassNames(offsetStyle)}>
        <div className={breadcrumbsContainerStyle}>
          <Breadcrumbs linkItems={linkItems} current="タスクを編集" />
        </div>
        <div className={baseStyle}>
          <div className={formContainerStyle}>
            <TaskForm
              title={title}
              content={content}
              status={status}
              labels={labels}
              labelTexts={taskLabelTexts}
              onChangeTitle={onChangeTitle}
              onChangeContent={onChangeContent}
              onChangeStatus={onChangeStatus}
              onChangeLabels={onChangeLabels}
              onClickSubmit={handleClickSubmit}
              titleError={titleError}
              contentError={contentError}
            />
          </div>
        </div>
        <div className={deleteButtonContainerStyle}>
          <Tooltip title="タスクを削除" placement="top">
            <Fab onClick={handleOpenConfirmDialog}>
              <Delete />
            </Fab>
          </Tooltip>
        </div>
      </div>
      <ConfirmDialog
        open={confirmDialogVisible}
        onClose={handleCloseConfirmDialog}
        message={`「${title}」を削除します。`}
      />
      <LoadingScreen loading={loading} />
    </>
  );
};
