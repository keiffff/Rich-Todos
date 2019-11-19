import * as React from 'react';

type PageHeaderStore = {
  pageHeaderStore: {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
  };
};

export const PageHeaderContext = React.createContext<PageHeaderStore>({
  pageHeaderStore: {
    title: '',
    setTitle: () => {},
  },
});
