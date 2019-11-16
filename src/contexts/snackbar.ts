import * as React from 'react';

type SnackbarContextValue = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const SnackbarContext = React.createContext<SnackbarContextValue>({
  message: '',
  setMessage: () => {},
});
