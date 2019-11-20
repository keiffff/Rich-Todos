import * as React from 'react';
import { css } from 'emotion';
import { AppBar } from '@material-ui/core';
import { PageHeaderContext } from '../contexts/pageHeader';

type Props = {
  children: React.ReactNode;
};

const headerStyle = css({
  position: 'fixed',
});

const headerTitleContainerStyle = css({
  display: 'inline-block',
  width: 196,
  paddingLeft: 16,
});

const headerTitleStyle = css({
  fontSize: 24,
  color: 'white',
});

export const PageHeader = ({ children }: Props) => {
  const [title, setTitle] = React.useState('');

  return (
    <PageHeaderContext.Provider value={{ pageHeaderStore: { title, setTitle } }}>
      <AppBar className={headerStyle} color="primary">
        <div className={headerTitleContainerStyle}>
          <h1 className={headerTitleStyle}>{title}</h1>
        </div>
      </AppBar>
      {children}
    </PageHeaderContext.Provider>
  );
};
