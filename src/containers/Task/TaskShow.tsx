import * as React from 'react';
import { useParams } from 'react-router-dom';
import { TaskShow } from '../../components/pages/TaskShow';
import { showTask } from '../../api/Task';
import { Task, TaskStatus } from '../../models/models';
import { TaskContext } from '../../contexts/task';
import { SnackbarContext } from '../../contexts/snackbar';
import { PageHeaderContext } from '../../contexts/pageHeader';
import { SnackbarTheme } from '../../constants/constants';

export const TaskShowContainer = () => {
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
      title={taskFormStore.title}
      content={taskFormStore.content}
      status={taskFormStore.status}
      labels={taskFormStore.labels}
      onChangeTitle={handleChangeTitle}
      onChangeContent={handleChangeContent}
      onChangeStatus={handleChangeStatus}
      onChangeLabels={handleChangeLabels}
      loading={loading}
    />
  );
};
