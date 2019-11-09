import * as React from 'react';
import { css } from 'emotion';
import { Dialog, DialogContent } from '@material-ui/core';
import { OpenWith } from '@material-ui/icons';

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
      </DialogContent>
    </Dialog>
  );
};
