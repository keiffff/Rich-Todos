import * as React from 'react';
import { Snackbar as SnackbarOrigin, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { SnackbarContext } from '../contexts/snackbar';

type Props = {
  children: React.ReactNode;
};

export const Snackbar = ({ children }: Props) => {
  const [message, setMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClose = React.useCallback(() => setOpen(false), []);

  return (
    <SnackbarContext.Provider value={{ message, setMessage }}>
      {children}
      <SnackbarOrigin
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom',
        }}
        autoHideDuration={5000}
        message={message}
        open={open}
        action={
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        }
      />
    </SnackbarContext.Provider>
  );
};
