import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { paths } from '../../constants/paths';
import { SnackbarContext } from '../../contexts/snackbar';
import { TaskContext } from '../../contexts/task';
import { PageHeaderContext } from '../../contexts/pageHeader';
import { TaskNew } from '../../components/pages/TaskNew';
import { Task, TaskStatus } from '../../models/models';
import { fetchTasks, addTask } from '../../api/Task';
import { SnackbarTheme } from '../../constants/constants';

export const TaskNewContainer = () => {
  const history = useHistory();
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
  const load = async () => {
    setLoading(true);
    try {
      const tasksData = await fetchTasks();
      taskStore.setTasks(tasksData);
    } catch (e) {
      snackbarStore.setSnackbarOptions({
        theme: SnackbarTheme.danger,
        message: 'タスク一覧の取得に失敗しました。',
      });
      throw e;
    }
    setLoading(false);
  };
  const handleAddNewTask = ({
    taskAttributeWithoutId,
  }: {
    taskAttributeWithoutId: Pick<Task, 'title' | 'content' | 'labels' | 'status'>;
  }) => {
    const newTaskId = taskStore.tasks.reduce((maxId, item) => (maxId < item.id ? item.id : maxId), 0) + 1;
    try {
      addTask({
        taskAttribute: { ...taskAttributeWithoutId, id: newTaskId },
        callback: () => {
          snackbarStore.setSnackbarOptions({
            theme: SnackbarTheme.success,
            message: 'タスクを追加しました。',
          });
          history.push(paths.tasks.index);
        },
      });
    } catch (e) {
      snackbarStore.setSnackbarOptions({
        theme: SnackbarTheme.danger,
        message: 'タスクの追加に失敗しました。再度やり直してください。',
      });
      throw e;
    }
  };
  React.useEffect(() => {
    pageHeaderStore.setTitle('新規タスク追加');
    if (taskStore.tasks.length) return;
    load();
  }, []);

  return (
    <TaskNew
      title={taskFormStore.title}
      content={taskFormStore.content}
      status={taskFormStore.status}
      labels={taskFormStore.labels}
      onChangeTitle={handleChangeTitle}
      onChangeContent={handleChangeContent}
      onChangeStatus={handleChangeStatus}
      onChangeLabels={handleChangeLabels}
      onReset={handleReset}
      onAddNewTask={handleAddNewTask}
      loading={loading}
    />
  );
};
