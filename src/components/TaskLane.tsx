import * as React from 'react';
import { css } from 'emotion';
import { TaskCard } from './TaskCard';

const taskListStyle = css({
  width: 328,
  display: 'flex',
  flexDirection: 'column',
  '> div': {
    marginTop: 8,
  },
});

export const TaskLane = () => {
  return (
    <>
      <header>status</header>
      <div className={taskListStyle}>
        <div draggable>
          <TaskCard />
        </div>
        <div draggable>
          <TaskCard />
        </div>
        <div draggable>
          <TaskCard />
        </div>
      </div>
    </>
  );
};
