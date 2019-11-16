import * as React from 'react';
import { Task } from '../models/models';

type TaskContextValue = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const TaskContext = React.createContext<TaskContextValue>({
  tasks: [],
  setTasks: () => {},
});
