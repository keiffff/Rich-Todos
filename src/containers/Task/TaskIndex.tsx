import * as React from 'react';
import { TaskIndex } from '../../components/TaskIndex';
import { Task, TaskStatus } from '../../models/models';
import { fetchTasks, addTask, updateTask } from '../../api/Task';
import { TaskContext } from '../../contexts/task';
import { SnackbarContext } from '../../contexts/snackbar';
import { SnackbarTheme } from '../../constants/constants';

export const TaskIndexContainer = () => {
  const { taskStore } = React.useContext(TaskContext);
  const { snackbarStore } = React.useContext(SnackbarContext);
  const [loading, setLoading] = React.useState(false);
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
        message: 'ステータスの追加に失敗しました。ページをリロードしてやり直してください。',
      });
      throw e;
    }
  };
  React.useEffect(() => {
    load();
  }, []);

  return (
    <TaskIndex
      tasks={taskStore.tasks}
      onUpdateTaskStatus={handleUpdateTaskStatus}
      onAddNewTask={handleAddNewTask}
      loading={loading}
    />
  );
};
