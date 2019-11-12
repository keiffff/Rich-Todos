import { firestore } from 'firebase/app';

export enum TaskStatus {
  todo = 'TODO',
  inProgress = 'IN_PROGRESS',
  done = 'DONE',
}

export type Task = {
  id: number;
  title: string;
  content: string;
  labels: string[];
  status: TaskStatus;
  createdAt?: firestore.Timestamp | null;
  updatedAt?: firestore.Timestamp | null;
};
