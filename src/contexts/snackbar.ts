import * as React from 'react';
import { SnackbarTheme } from '../constants/constants';

type SnackbarStore = {
  snackbarStore: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    setTheme: React.Dispatch<React.SetStateAction<SnackbarTheme>>;
  };
};

export const SnackbarContext = React.createContext<SnackbarStore>({
  snackbarStore: {
    setOpen: () => {},
    setMessage: () => {},
    setTheme: () => {},
  },
});
