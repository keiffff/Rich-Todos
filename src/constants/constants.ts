import { TaskStatus } from '../models/models';

export const taskStatusText: { [K in TaskStatus]: string } = {
  [TaskStatus.todo]: 'Todo',
  [TaskStatus.inProgress]: 'In Progress',
  [TaskStatus.done]: 'Done',
};

export const taskLabelTexts = ['フロント', 'サーバー', '新規', '改修', 'バグ修正', 'テスト'];

export const statusLists = [TaskStatus.todo, TaskStatus.inProgress, TaskStatus.done];

export enum SnackbarTheme {
  default = 'default',
  success = 'succeess',
  danger = 'danger',
}

export const snackbarThemeToColorCode = (theme: SnackbarTheme) => {
  switch (theme) {
    case SnackbarTheme.default:
      return '#3f51b5';
    case SnackbarTheme.success:
      return '#43a048';
    case SnackbarTheme.danger:
      return '#d32f2f';
    default:
      return '#3f51b5';
  }
};
