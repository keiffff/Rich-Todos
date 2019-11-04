export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export type Task = {
  title: string;
  content: string;
  labels: string[];
  status: TaskStatus;
};
