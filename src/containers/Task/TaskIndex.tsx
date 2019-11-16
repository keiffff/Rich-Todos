import * as React from 'react';
import { TaskIndex } from '../../components/TaskIndex';
import { Task, TaskStatus } from '../../models/models';
import { fetchTasks, addTask, updateTask } from '../../api/Task';
import { TaskContext } from '../../contexts/task';

export const TaskIndexContainer = () => {
  const { tasks, setTasks } = React.useContext(TaskContext);
  const [loading, setLoading] = React.useState(false);
  const load = async () => {
    setLoading(true);
    const tasksData = await fetchTasks();
    setTasks(tasksData);
    setLoading(false);
  };

  const handleUpdateTaskStatus = ({ status, targetId }: { status: TaskStatus; targetId: number }) => {
    updateTask({ updateTaskAttribute: { status }, targetId, callback: load });
  };
  const handleAddNewTask = ({
    taskAttributeWithoutId,
  }: {
    taskAttributeWithoutId: Pick<Task, 'title' | 'content' | 'labels' | 'status'>;
  }) => {
    const newTaskId = tasks.reduce((maxId, item) => (maxId < item.id ? item.id : maxId), 0) + 1;
    addTask({
      taskAttribute: { ...taskAttributeWithoutId, id: newTaskId },
      callback: load,
    });
  };
  React.useEffect(() => {
    load();
  }, []);

  return (
    <TaskIndex
      tasks={tasks}
      onUpdateTaskStatus={handleUpdateTaskStatus}
      onAddNewTask={handleAddNewTask}
      loading={loading}
    />
  );
};
