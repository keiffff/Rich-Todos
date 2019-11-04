export enum TaskStatus {
  todo = 'TODO',
  inProgress = 'IN_PROGRESS',
  done = 'DONE',
}

export type Task = {
  title: string;
  content: string;
  labels: string[];
  status: TaskStatus;
};
