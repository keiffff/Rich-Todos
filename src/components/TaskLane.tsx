import * as React from 'react';
import { css } from 'emotion';
import { TaskCard } from './TaskCard';
import { Task } from '../models/models';

type Props = {
  title: string;
  tasks: Task[];
};

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
    <div>
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
