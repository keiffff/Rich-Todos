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
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [snackbarTheme, setSnackbarTheme] = React.useState(SnackbarTheme.default);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const setSnackbarOptions = React.useCallback(
    ({ message, theme }: { message: string; theme: SnackbarTheme }) => {
      setSnackbarTheme(theme);
      setSnackbarOpen(true);
      setSnackbarMessage(message);
    },
    [snackbarMessage, snackbarTheme, snackbarOpen],
  );
  const handleClose = React.useCallback(() => setSnackbarOpen(false), []);
  const snackbarWithThemeStyle = React.useMemo(
    () =>
      css(snackbarStyle, {
        '> .MuiSnackbarContent-root': {
          background: snackbarThemeToColorCode(snackbarTheme),
        },
      }),
    [snackbarTheme],
  );

  return (
    <SnackbarContext.Provider value={{ snackbarStore: { setSnackbarOptions } }}>
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
        message={snackbarMessage}
        open={snackbarOpen}
        action={
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        }
      />
    </SnackbarContext.Provider>
  );
};
