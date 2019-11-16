import * as React from 'react';
import { SnackbarTheme } from '../constants/constants';

type SnackbarContextValue = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setTheme: React.Dispatch<React.SetStateAction<SnackbarTheme>>;
};

export const SnackbarContext = React.createContext<SnackbarContextValue>({
  setOpen: () => {},
  setMessage: () => {},
  setTheme: () => {},
});
