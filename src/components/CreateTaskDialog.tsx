import * as React from 'react';
import { css } from 'emotion';
import { Chip, Dialog, DialogContent, Input, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { OpenWith } from '@material-ui/icons';
import { TaskStatus } from '../models/models';
import { taskStatusText } from '../constants/constants';

type Props = {
  open: boolean;
  onClose: () => void;
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

const selectStyle = css({
  marginTop: 8,
  width: '40%',
});

const labelTexts = ['front', 'server', 'infra', 'feat', 'bugfix', 'hotfix'];

export const CreateTaskDialog = ({ open, onClose }: Props) => {
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
              <TextField className={titleTextFieldStyle} required label="タイトル" />
            </div>
            <div className={controlStyle}>
              <TextField className={titleTextFieldStyle} multiline rows={8} label="内容" variant="outlined" />
            </div>
            <div className={controlStyle}>
              <InputLabel>ステータス</InputLabel>
              <Select className={selectStyle} value={TaskStatus.todo}>
                <MenuItem value={TaskStatus.todo}>{taskStatusText[TaskStatus.todo]}</MenuItem>
                <MenuItem value={TaskStatus.inProgress}>{taskStatusText[TaskStatus.inProgress]}</MenuItem>
                <MenuItem value={TaskStatus.done}>{taskStatusText[TaskStatus.done]}</MenuItem>
              </Select>
            </div>
            <div className={controlStyle}>
              <InputLabel>ラベル</InputLabel>
              <Select
                className={selectStyle}
                value={[]}
                input={<Input />}
                multiple
                renderValue={selected => (selected as string[]).map(v => <Chip key={v} label={v} />)}
              >
                {labelTexts.map(text => (
                  <MenuItem key={text} value={text}>
                    {text}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
