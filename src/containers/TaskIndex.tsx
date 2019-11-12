import * as React from 'react';
import { TaskIndex } from '../components/TaskIndex';
import { Task, TaskStatus } from '../models/models';
import { useTasks } from '../hooks/useTasks';

export const TaskIndexContainer = () => {
  const { tasks } = useTasks();
  const [tasksState, setTasksState] = React.useState<Task[]>([]);
  const handleEditTaskStatus = ({ status, targetId }: { status: TaskStatus; targetId: number }) => {
    setTasksState((prevTasks: Task[]) => {
      const targetTask = prevTasks.find(task => task.id === targetId);
      const rests = prevTasks.filter(task => task.id !== targetId);

      return [...rests, { ...targetTask, status } as Task];
    });
  };
  const handleAddNewTask = (task: Omit<Task, 'id'>) => {
    setTasksState((prevTasks: Task[]) => {
      const newTaskId = prevTasks.reduce((maxId, item) => (maxId < item.id ? item.id : maxId), 0) + 1;

      return [...prevTasks, { id: newTaskId, ...task }];
    });
  };
  React.useEffect(() => setTasksState(tasks as Task[]), [tasks]);

  return <TaskIndex tasks={tasksState} onEditTaskStatus={handleEditTaskStatus} onAddNewTask={handleAddNewTask} />;
};
