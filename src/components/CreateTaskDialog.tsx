import * as React from 'react';
import { css } from 'emotion';
import { Chip, Dialog, DialogContent, Button, Input, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Navigation, OpenWith } from '@material-ui/icons';
import { Task, TaskStatus } from '../models/models';
import { taskStatusText, statusLists } from '../constants/constants';

type Props = {
  open: boolean;
  onClose: () => void;
  onAddNewTask: ({
    taskAttributeWithoutId,
  }: {
    taskAttributeWithoutId: Pick<Task, 'title' | 'content' | 'labels' | 'status'>;
  }) => void;
};

const dialogStyle = css({
  '.MuiDialog-paper': {
    width: '70%',
    height: '70%',
  },
});

const openAsNewPageLinkStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  color: '#808080',
  cursor: 'pointer',
  '> svg': {
    marginRight: 4,
  },
  '&:hover': {
    color: '#696969',
    textDecoration: 'underline',
  },
});

const formContainerStyle = css({
  padding: `40px 64px 64px`,
});

const controlStyle = css({
  margin: '0 auto',
  '& + &': {
    marginTop: 48,
  },
});

const titleTextFieldStyle = css({
  width: '100%',
});

const selectBaseStyle = css({
  marginTop: 8,
});

const statusSelectStyle = css(selectBaseStyle, {
  width: '40%',
});

const labelsSelectStyle = css(selectBaseStyle, {
  width: '100%',
});

const addButtonStyle = css({
  width: '100%',
});

const labelTexts = ['front', 'server', 'infra', 'feat', 'bugfix', 'hotfix'];

export const CreateTaskDialog = ({ open, onClose, onAddNewTask }: Props) => {
  const [error, setError] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [status, setStatus] = React.useState(TaskStatus.todo);
  const [labels, setLabels] = React.useState<string[]>([]);
  const handleChangeTitle = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value),
    [],
  );
  const handleChangeContent = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setContent(e.currentTarget.value),
    [],
  );
  const handleChangeStatus = React.useCallback((e: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(e.target.value as TaskStatus);
  }, []);
  const handleChangeLabels = React.useCallback((e: React.ChangeEvent<{ value: unknown }>) => {
    setLabels(e.target.value as string[]);
  }, []);
  const titleError = error && !title.trim();
  const contentError = error && !content.trim();
  const errorCondition = !title.trim() || !content.trim();
  const handleClickAddButton = () => {
    setError(errorCondition);
    if (errorCondition) return;
    onAddNewTask({
      taskAttributeWithoutId: { title, content, status, labels },
    });
    setError(false);
    setTitle('');
    setContent('');
    setStatus(TaskStatus.todo);
    setLabels([]);
    onClose();
  };

  return (
    <Dialog className={dialogStyle} open={open} onClose={onClose} maxWidth="lg">
      <DialogContent>
        <header>
          <span className={openAsNewPageLinkStyle}>
            <OpenWith />
            ページとして開く
          </span>
        </header>
        <div className={formContainerStyle}>
          <form>
            <div className={controlStyle}>
              <TextField
                className={titleTextFieldStyle}
                required
                label={titleError ? '入力必須項目です' : 'タイトル'}
                value={title}
                error={titleError}
                onChange={handleChangeTitle}
              />
            </div>
            <div className={controlStyle}>
              <TextField
                className={titleTextFieldStyle}
                required
                multiline
                rows={8}
                label={contentError ? '入力必須項目です' : '内容'}
                variant="outlined"
                value={content}
                error={contentError}
                onChange={handleChangeContent}
              />
            </div>
            <div className={controlStyle}>
              <InputLabel>ステータス</InputLabel>
              <Select className={statusSelectStyle} value={status} onChange={handleChangeStatus}>
                {statusLists.map(item => (
                  <MenuItem key={item} value={item}>
                    {taskStatusText[item]}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className={controlStyle}>
              <InputLabel>ラベル</InputLabel>
              <Select
                multiple
                input={<Input />}
                className={labelsSelectStyle}
                value={labels}
                renderValue={selected => (selected as string[]).map(v => <Chip key={v} label={v} />)}
                onChange={handleChangeLabels}
              >
                {labelTexts.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className={controlStyle}>
              <Button
                className={addButtonStyle}
                variant="contained"
                color="primary"
                aria-label="Add"
                onClick={handleClickAddButton}
              >
                <Navigation />
                送信
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
