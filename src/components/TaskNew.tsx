import * as React from 'react';
import { css } from 'emotion';
import { CircularProgress, Modal } from '@material-ui/core';
import { TaskForm } from './TaskForm';
import { taskLabelTexts } from '../constants/constants';
import { Task, TaskStatus } from '../models/models';

type Props = {
  onAddNewTask: ({
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

const offsetStyle = css({
  paddingTop: 72,
});

const formContainerStyle = css({
  width: '70%',
  padding: `40px 64px 64px`,
  marginLeft: 20,
  border: '1px solid #d3d3d3',
  borderRadius: 8,
});

const modalStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
});

const circularProgressStyle = css({
  outline: 'none',
});

export const TaskNew = ({
  onAddNewTask,
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
    onAddNewTask({
      taskAttributeWithoutId: { title, content, status, labels },
    });
    setError(false);
    onReset();
  }, [errorCondition, title, content, status, labels]);

  return (
    <div className={offsetStyle}>
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
      <Modal className={modalStyle} open={loading}>
        <CircularProgress className={circularProgressStyle} size={60} />
      </Modal>
    </div>
  );
};
