import * as React from 'react';
import { css } from 'emotion';
import ClassNames from 'classnames';
import { LoadingScreen } from '../LoadingScreen';
import { Task, TaskStatus } from '../../models/models';
import { TaskForm } from '../TaskForm';
import { Breadcrumbs } from '../Breadcrumbs';
import { taskLabelTexts } from '../../constants/constants';
import { paths } from '../../constants/paths';

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
  marginLeft: 20,
  border: '1px solid #d3d3d3',
  borderRadius: 8,
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
  const titleError = React.useMemo(() => error && !title.trim(), [error, title]);
  const contentError = React.useMemo(() => error && !content.trim(), [error, content]);
  const errorCondition = React.useMemo(() => !title.trim() || !content.trim(), [title, content]);
  const handleClickSubmit = React.useCallback(() => {
    setError(errorCondition);
    if (errorCondition) return;
    onUpdateTask({
      taskAttributeWithoutId: { title, content, status, labels },
    });
    setError(false);
    onReset();
  }, [errorCondition, title, content, status, labels]);

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
      </div>
      <LoadingScreen loading={loading} />
    </>
  );
};
