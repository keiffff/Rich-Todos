import * as React from 'react';
import { Snackbar as SnackbarOrigin, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { css } from 'emotion';
import { SnackbarContext } from '../contexts/snackbar';
import { SnackbarTheme, snackbarThemeToColorCode } from '../constants/constants';

type Props = {
  children: React.ReactNode;
};

const snackbarStyle = css({
  '> .MuiSnackbarContent-root': {
    background: '#3f51b5',
    '> .MuiSnackbarContent-action': {
      '> .MuiIconButton-root': {
        color: 'white',
      },
    },
  },
});

export const Snackbar = ({ children }: Props) => {
  const [message, setMessage] = React.useState('');
  const [theme, setTheme] = React.useState(SnackbarTheme.default);
  const [open, setOpen] = React.useState(false);

  const handleClose = React.useCallback(() => setOpen(false), []);

  const snackbarWithThemeStyle = css(snackbarStyle, {
    '> .MuiSnackbarContent-root': {
      background: snackbarThemeToColorCode(theme),
    },
  });

  return (
    <SnackbarContext.Provider value={{ snackbarStore: { setOpen, setMessage, setTheme } }}>
      {children}
      <SnackbarOrigin
        className={snackbarWithThemeStyle}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom',
        }}
        onClose={handleClose}
        autoHideDuration={5000}
        transitionDuration={{ enter: 1000 }}
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
