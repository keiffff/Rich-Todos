import * as React from 'react';
import { TaskIndex } from '../components/TaskIndex';
import { Task, TaskStatus } from '../models/models';
import { fetchTasks, addTask } from '../api/Task';

export const TaskIndexContainer = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleEditTaskStatus = ({ status, targetId }: { status: TaskStatus; targetId: number }) => {
    setTasks((prevState: Task[]) => {
      const targetTask = prevState.find(task => task.id === targetId);
      const rests = prevState.filter(task => task.id !== targetId);

      return [...rests, { ...targetTask, status } as Task];
    });
  };
  const handleAddNewTask = ({
    taskAttributeWithoutId,
  }: {
    taskAttributeWithoutId: Pick<Task, 'title' | 'content' | 'labels' | 'status'>;
  }) => {
    const newTaskId = tasks.reduce((maxId, item) => (maxId < item.id ? item.id : maxId), 0) + 1;
    addTask({ taskAttribute: { ...taskAttributeWithoutId, id: newTaskId } });
  };
  React.useEffect(() => {
    const load = async () => {
      setLoading(true);
      const tasksData = await fetchTasks();
      setTasks(tasksData);
      setLoading(false);
    };

    load();
  }, [tasks]);

  return (
    <TaskIndex
      tasks={tasks}
      onEditTaskStatus={handleEditTaskStatus}
      onAddNewTask={handleAddNewTask}
      loading={loading}
    />
  );
};
