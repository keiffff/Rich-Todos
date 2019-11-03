import * as React from 'react';
import ClassNames from 'classnames';
import { css } from 'emotion';
import { AppBar, Grid } from '@material-ui/core';
import { TaskLane } from './TaskLane';

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

export const IndexPage = () => {
  return (
    <div className={ClassNames(offsetStyle, baseStyle)}>
      <AppBar className={headerStyle} color="default">
        <div className={headerTitleContainerStyle}>
          <h1 className={headerTitleStyle}>Rich Todos</h1>
        </div>
      </AppBar>
      <Grid container>
        <Grid item xs={4}>
          <TaskLane />
        </Grid>
        <Grid item xs={4}>
          <TaskLane />
        </Grid>
        <Grid item xs={4}>
          <TaskLane />
        </Grid>
      </Grid>
    </div>
  );
};
