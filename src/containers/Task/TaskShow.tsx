import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { paths } from '../../constants/paths';
import { TaskShow } from '../../components/pages/TaskShow';
import { showTask, updateTask } from '../../api/Task';
import { Task, TaskStatus } from '../../models/models';
import { TaskContext } from '../../contexts/task';
import { SnackbarContext } from '../../contexts/snackbar';
import { PageHeaderContext } from '../../contexts/pageHeader';
import { SnackbarTheme } from '../../constants/constants';

export const TaskShowContainer = () => {
  const history = useHistory();
  const { id } = useParams();
  const { taskStore, taskFormStore } = React.useContext(TaskContext);
  const { snackbarStore } = React.useContext(SnackbarContext);
  const { pageHeaderStore } = React.useContext(PageHeaderContext);
  const [loading, setLoading] = React.useState(false);
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
  const setTaskFormValues = (task: Task) => {
    taskFormStore.setTitle(task.title);
    taskFormStore.setContent(task.content);
    taskFormStore.setStatus(task.status);
    taskFormStore.setLabels(task.labels);
  };
  const load = async () => {
    setLoading(true);
    try {
      const taskData = await showTask({ targetId: Number(id) });
      setTaskFormValues(taskData);
    } catch (e) {
      snackbarStore.setSnackbarOptions({
        theme: SnackbarTheme.danger,
        message: 'タスクの取得に失敗しました。',
      });
      throw e;
    }
    setLoading(false);
  };
  const foundTask = React.useMemo(() => taskStore.tasks.find(t => t.id === Number(id)), [id]);
  const handleUpdateTask = ({
    taskAttributeWithoutId,
  }: {
    taskAttributeWithoutId: Pick<Task, 'title' | 'content' | 'labels' | 'status'>;
  }) => {
    try {
      updateTask({
        updateTaskAttribute: taskAttributeWithoutId,
        targetId: Number(id),
      });
      snackbarStore.setSnackbarOptions({
        theme: SnackbarTheme.success,
        message: 'タスクを更新しました。',
      });
      history.push(paths.tasks.index);
    } catch (e) {
      snackbarStore.setSnackbarOptions({
        theme: SnackbarTheme.danger,
        message: 'タスクの更新に失敗しました。再度やり直してください。',
      });
      throw e;
    }
  };
  React.useEffect(() => {
    pageHeaderStore.setTitle('タスクを編集');
    if (foundTask) {
      setTaskFormValues(foundTask);

      return;
    }

    load();
  }, []);

  return (
    <TaskShow
      onUpdateTask={handleUpdateTask}
      title={taskFormStore.title}
      content={taskFormStore.content}
      status={taskFormStore.status}
      labels={taskFormStore.labels}
      onChangeTitle={handleChangeTitle}
      onChangeContent={handleChangeContent}
      onChangeStatus={handleChangeStatus}
      onChangeLabels={handleChangeLabels}
      onReset={handleReset}
      loading={loading}
    />
  );
};
