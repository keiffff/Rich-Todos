import * as React from 'react';
// import { css } from 'emotion';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const CreateTaskDialog = ({ open, onClose }: Props) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Task</DialogTitle>
      <DialogContent>New Task</DialogContent>
    </Dialog>
  );
};
