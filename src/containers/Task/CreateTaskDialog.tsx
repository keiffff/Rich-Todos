import * as React from 'react';
import { CreateTaskDialog } from '../../components/CreateTaskDialog';
import { TaskContext } from '../../contexts/task';
import { Task, TaskStatus } from '../../models/models';

type Props = {
  open: boolean;
  onClose: () => void;
  onAddNewTask: ({
    taskAttributeWithoutId,
  }: {
    taskAttributeWithoutId: Pick<Task, 'title' | 'content' | 'labels' | 'status'>;
  }) => void;
};

export const CreateTaskDialogContainer = ({ open, onClose, onAddNewTask }: Props) => {
  const { taskFormStore } = React.useContext(TaskContext);
  const handleChangeTitle = React.useCallback((value: string) => taskFormStore.setTitle(value), []);
  const handleChangeContent = React.useCallback((value: string) => taskFormStore.setContent(value), []);
  const handleChangeStatus = React.useCallback((value: TaskStatus) => {
    taskFormStore.setStatus(value);
  }, []);
  const handleChangeLabels = React.useCallback((value: string[]) => {
    taskFormStore.setLabels(value);
  }, []);
  const handleReset = React.useCallback(() => {
    taskFormStore.setTitle('');
    taskFormStore.setContent('');
    taskFormStore.setStatus(TaskStatus.todo);
    taskFormStore.setLabels([]);
  }, []);

  return (
    <CreateTaskDialog
      open={open}
      onClose={onClose}
      onAddNewTask={onAddNewTask}
      title={taskFormStore.title}
      content={taskFormStore.content}
      status={taskFormStore.status}
      labels={taskFormStore.labels}
      onChangeTitle={handleChangeTitle}
      onChangeContent={handleChangeContent}
      onChangeStatus={handleChangeStatus}
      onChangeLabels={handleChangeLabels}
      onReset={handleReset}
    />
  );
};
