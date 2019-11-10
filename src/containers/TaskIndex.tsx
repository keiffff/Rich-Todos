import * as React from 'react';
import { TaskIndex } from '../components/TaskIndex';
import { tasks as tasksData } from '../mocks/index';
import { Task, TaskStatus } from '../models/models';

export const TaskIndexContainer = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const handleEditTaskStatus = ({ status, targetId }: { status: TaskStatus; targetId: number }) => {
    setTasks((prevTasks: Task[]) => {
      const targetTask = prevTasks.find(task => task.id === targetId);
      const rests = prevTasks.filter(task => task.id !== targetId);

      return [...rests, { ...targetTask, status } as Task];
    });
  };
  React.useEffect(() => setTasks(tasksData), []);

  return <TaskIndex tasks={tasks} onEditTaskStatus={handleEditTaskStatus} />;
};
