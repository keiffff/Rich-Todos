import * as React from 'react';
import { Task, TaskStatus } from '../models/models';

type TaskStore = {
  taskStore: {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  };
  taskFormStore: {
    title: string;
    content: string;
    status: TaskStatus;
    labels: string[];
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    setStatus: React.Dispatch<React.SetStateAction<TaskStatus>>;
    setLabels: React.Dispatch<React.SetStateAction<string[]>>;
    resetState: () => void;
  };
};

export const TaskContext = React.createContext<TaskStore>({
  taskStore: {
    tasks: [],
    setTasks: () => {},
  },
  taskFormStore: {
    title: '',
    content: '',
    status: TaskStatus.todo,
    labels: [],
    setTitle: () => {},
    setContent: () => {},
    setStatus: () => {},
    setLabels: () => {},
    resetState: () => {},
  },
});
