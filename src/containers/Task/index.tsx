import * as React from 'react';
import { TaskIndexContainer as TaskIndex } from './TaskIndex';
import { TaskContext } from '../../contexts/task';
import { Task } from '../../models/models';

export const Tasks = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <TaskIndex />
    </TaskContext.Provider>
  );
};
