import * as React from 'react';
import { Task } from './models/models';

type FirebaseContextValue = {
  db: firebase.firestore.Firestore | null;
};

export const FirebaseContext = React.createContext<FirebaseContextValue>({
  db: null,
});

export const TasksContext = React.createContext<{
  tasksState: Task[];
  setTasksState: React.Dispatch<React.SetStateAction<Task[]>>;
}>({ tasksState: [], setTasksState: () => {} });
