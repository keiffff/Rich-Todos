import * as React from 'react';
import { useParams } from 'react-router-dom';
import { TaskShow } from '../../components/pages/TaskShow';
import { showTask } from '../../api/Task';
import { Task, TaskStatus } from '../../models/models';
import { TaskContext } from '../../contexts/task';
import { SnackbarContext } from '../../contexts/snackbar';
import { SnackbarTheme } from '../../constants/constants';

export const TaskShowContainer = () => {
  const { id } = useParams();
  const { taskStore } = React.useContext(TaskContext);
  const { snackbarStore } = React.useContext(SnackbarContext);
  const [task, setTask] = React.useState<Task>({
    id: -1,
    title: '',
    content: '',
    labels: [],
    status: TaskStatus.todo,
    createdAt: null,
    updatedAt: null,
  });
  const [loading, setLoading] = React.useState(false);
  const load = async () => {
    setLoading(true);
    try {
      const taskData = await showTask({ targetId: Number(id) });
      setTask(taskData);
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

  React.useEffect(() => {
    if (foundTask) {
      setTask(foundTask);

      return;
    }

    load();
  }, []);

  return !loading && task ? <TaskShow task={task} /> : null;
};
