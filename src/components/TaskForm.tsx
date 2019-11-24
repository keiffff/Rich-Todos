import * as React from 'react';
import { css } from 'emotion';
import { Chip, Button, Input, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Navigation } from '@material-ui/icons';
import { TaskStatus } from '../models/models';
import { taskStatusText, statusLists } from '../constants/constants';

type Props = Partial<{
  title: string;
  content: string;
  status: TaskStatus;
  labels: string[];
  labelTexts: string[];
  onChangeTitle: (value: string) => void;
  onChangeContent: (value: string) => void;
  onChangeStatus: (value: TaskStatus) => void;
  onChangeLabels: (value: string[]) => void;
  onClickSubmit: () => void;
  titleError: boolean;
  contentError: boolean;
}>;

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

const chipStyle = css({
  '& + &': {
    marginLeft: 4,
  },
});

const addButtonStyle = css({
  width: '100%',
});

export const TaskForm = ({
  title,
  content,
  status,
  labels,
  labelTexts,
  titleError,
  contentError,
  onChangeTitle,
  onChangeContent,
  onChangeStatus,
  onChangeLabels,
  onClickSubmit,
}: Props) => {
  const handleChangeTitle = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => onChangeTitle && onChangeTitle(e.currentTarget.value),
    [],
  );
  const handleChangeContent = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => onChangeContent && onChangeContent(e.currentTarget.value),
    [],
  );
  const handleChangeStatus = React.useCallback(
    (e: React.ChangeEvent<{ value: unknown }>) => onChangeStatus && onChangeStatus(e.target.value as TaskStatus),
    [],
  );
  const handleChangeLabels = React.useCallback(
    (e: React.ChangeEvent<{ value: unknown }>) => onChangeLabels && onChangeLabels(e.target.value as string[]),
    [],
  );

  return (
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
          renderValue={selected => (selected as string[]).map(v => <Chip className={chipStyle} key={v} label={v} />)}
          onChange={handleChangeLabels}
        >
          {labelTexts &&
            labelTexts.map(item => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </div>
      <div className={controlStyle}>
        <Button className={addButtonStyle} variant="contained" color="primary" aria-label="Add" onClick={onClickSubmit}>
          <Navigation />
          送信
        </Button>
      </div>
    </form>
  );
};
