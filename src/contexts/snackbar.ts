import * as React from 'react';
import { SnackbarTheme } from '../constants/constants';

type SnackbarStore = {
  snackbarStore: {
    setSnackbarOptions: ({ message, theme }: { message: string; theme: SnackbarTheme }) => void;
  };
};

export const SnackbarContext = React.createContext<SnackbarStore>({
  snackbarStore: {
    setSnackbarOptions: () => {},
  },
});
