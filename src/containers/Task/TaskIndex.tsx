import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { paths } from '../../constants/paths';
import { TaskIndex } from '../../components/pages/TaskIndex';
import { Task, TaskStatus } from '../../models/models';
import { fetchTasks, addTask, updateTask } from '../../api/Task';
import { TaskContext } from '../../contexts/task';
import { SnackbarContext } from '../../contexts/snackbar';
import { PageHeaderContext } from '../../contexts/pageHeader';
import { SnackbarTheme } from '../../constants/constants';

export const TaskIndexContainer = () => {
  const history = useHistory();
  const { taskStore } = React.useContext(TaskContext);
  const { snackbarStore } = React.useContext(SnackbarContext);
  const { pageHeaderStore } = React.useContext(PageHeaderContext);
  const [loading, setLoading] = React.useState(false);
  const handleClickTask = React.useCallback((id: number) => {
    history.replace(`${paths.basePath}task/${id}`);
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
    }
    setLoading(false);
  };
  const handleUpdateTaskStatus = ({ status, targetId }: { status: TaskStatus; targetId: number }) => {
    setLoading(true);
    try {
      updateTask({ updateTaskAttribute: { status }, targetId, callback: load });
      snackbarStore.setSnackbarOptions({
        theme: SnackbarTheme.success,
        message: 'ステータスを更新しました。',
      });
    } catch (e) {
      snackbarStore.setSnackbarOptions({
        theme: SnackbarTheme.danger,
        message: 'ステータスの更新に失敗しました。ページをリロードしてやり直してください。',
      });
      throw e;
    }
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
        callback: load,
      });
      snackbarStore.setSnackbarOptions({
        theme: SnackbarTheme.success,
        message: 'タスクを追加しました。',
      });
    } catch (e) {
      snackbarStore.setSnackbarOptions({
        theme: SnackbarTheme.danger,
        message: 'タスクの追加に失敗しました。ページをリロードしてやり直してください。',
      });
      throw e;
    }
  };
  React.useEffect(() => {
    pageHeaderStore.setTitle('Rich Todos');
    load();
  }, []);

  return (
    <TaskIndex
      tasks={taskStore.tasks}
      onUpdateTaskStatus={handleUpdateTaskStatus}
      onAddNewTask={handleAddNewTask}
      onClickTask={handleClickTask}
      loading={loading}
    />
  );
};
