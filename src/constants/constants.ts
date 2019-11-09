import { TaskStatus } from '../models/models';

export const taskStatusText: { [K in TaskStatus]: string } = {
  [TaskStatus.todo]: 'Todo',
  [TaskStatus.inProgress]: 'In Progress',
  [TaskStatus.done]: 'Done',
};
