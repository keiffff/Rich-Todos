import * as React from 'react';
import { css } from 'emotion';
import { TaskCard } from './TaskCard';
import { Task } from '../models/models';

type Props = {
  title: string;
  tasks: Task[];
};

const baseStyle = css({
  padding: 16,
  border: '1px solid #d3d3d3',
  borderRadius: 8,
  '& + &': {
    marginLeft: 16,
  },
});

const headerTextStyle = css({
  fontWeight: 'bold',
});

const taskListStyle = css({
  width: 328,
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  '> li': {
    marginTop: 8,
  },
});

export const TaskLane = ({ title, tasks }: Props) => {
  return (
    <div className={baseStyle}>
      <header>
        <span className={headerTextStyle}>
          {title}: {tasks.length}
        </span>
      </header>
      <ul className={taskListStyle}>
        {tasks.map(task => (
          <li key={task.content} draggable>
            <TaskCard task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};
