import * as React from 'react';
import { css } from 'emotion';
import { TaskCard } from './TaskCard';
import { Task } from '../models/models';

type Props = {
  tasks: Task[];
};

const taskListStyle = css({
  width: 328,
  display: 'flex',
  flexDirection: 'column',
  '> div': {
    marginTop: 8,
  },
});

export const TaskLane = ({ tasks }: Props) => {
  return (
    <>
      <header>status</header>
      <div className={taskListStyle}>
        {tasks.map(task => (
          <div draggable>
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </>
  );
};
