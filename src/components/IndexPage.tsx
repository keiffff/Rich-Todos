import * as React from 'react';
import ClassNames from 'classnames';
import { css } from 'emotion';
import { AppBar, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { TaskLane } from './TaskLane';
import { tasks } from '../mocks/index';

const baseStyle = css({
  verticalAlign: 'center',
});

const offsetStyle = css({
  paddingTop: 72,
});

const headerStyle = css({
  position: 'fixed',
});

const headerTitleContainerStyle = css({
  display: 'inline-block',
  width: 196,
  background: 'linear-gradient(to right, #ec77ab, #7873f5)',
  WebkitBackgroundClip: 'text',
  paddingLeft: 16,
});

const headerTitleStyle = css({
  fontSize: 24,
  color: 'transparent',
});

const addButtonContainerStyle = css({
  position: 'fixed',
  bottom: 20,
  right: 20,
});

export const IndexPage = () => {
  return (
    <div className={ClassNames(offsetStyle, baseStyle)}>
      <AppBar className={headerStyle} color="default">
        <div className={headerTitleContainerStyle}>
          <h1 className={headerTitleStyle}>Rich Todos</h1>
        </div>
      </AppBar>
      <TaskLane tasks={tasks} />
      <div className={addButtonContainerStyle}>
        <Fab color="primary">
          <Add />
        </Fab>
      </div>
    </div>
  );
};
