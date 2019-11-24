import * as React from 'react';
import { css } from 'emotion';
import { Button, Dialog } from '@material-ui/core';

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  message?: string;
};

const baseStyle = css({
  textAlign: 'center',
  '.MuiDialog-paper': {
    width: '30%',
  },
  whiteSpace: 'pre-line',
});

const confirmDialogButtonsContainerStyle = css({
  display: 'flex',
  margin: `auto 0`,
  padding: `16px 24px`,
  '> button': {
    width: '100%',
  },
});

export const ConfirmDialog = ({ open, onClose, onSubmit, message }: Props) => {
  return (
    <Dialog className={baseStyle} open={open} onClose={onClose}>
      <p>{`${message ? `${message}\n` : ''}本当によろしいですか？`}</p>
      <div className={confirmDialogButtonsContainerStyle}>
        <Button onClick={onClose}>キャンセル</Button>
        <Button onClick={onSubmit}>送信</Button>
      </div>
    </Dialog>
  );
};
