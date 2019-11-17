import * as React from 'react';
import { Task } from '../models/models';

type TaskStore = {
  taskStore: {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  };
};

export const TaskContext = React.createContext<TaskStore>({
  taskStore: {
    tasks: [],
    setTasks: () => {},
  },
});
