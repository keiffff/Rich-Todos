import * as React from 'react';
import { css } from 'emotion';
import { TaskCard } from './TaskCard';
import { Task } from '../models/models';

type Props = {
  tasks: Task[];
};

const baseStyle = css({
  display: 'flex',
  flex: 'auto',
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

export const TaskLane = ({ tasks }: Props) => {
  const todoTasks = tasks.filter(task => task.status === 'TODO');
  const inProgressTasks = tasks.filter(task => task.status === 'IN_PROGRESS');
  const doneTasks = tasks.filter(task => task.status === 'DONE');

  return (
    <section className={baseStyle}>
      <div>
        <header>
          <span className={headerTextStyle}>
            Todo:
            {todoTasks.length}
          </span>
        </header>
        <ul className={taskListStyle}>
          {todoTasks.map(task => (
            <li key={task.content} draggable>
              <TaskCard task={task} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <header>
          <span className={headerTextStyle}>
            In progress:
            {inProgressTasks.length}
          </span>
        </header>
        <ul className={taskListStyle}>
          {inProgressTasks.map(task => (
            <li key={task.content} draggable>
              <TaskCard task={task} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <header>
          <span className={headerTextStyle}>
            Done:
            {doneTasks.length}
          </span>
        </header>
        <ul className={taskListStyle}>
          {doneTasks.map(task => (
            <li key={task.content} draggable>
              <TaskCard task={task} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
