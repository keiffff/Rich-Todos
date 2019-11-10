import { TaskStatus } from '../models/models';

export const taskStatusText: { [K in TaskStatus]: string } = {
  [TaskStatus.todo]: 'Todo',
  [TaskStatus.inProgress]: 'In Progress',
  [TaskStatus.done]: 'Done',
};

export const statusLists = [TaskStatus.todo, TaskStatus.inProgress, TaskStatus.done];
