import * as React from 'react';
import { css } from 'emotion';
import { TaskCard } from './TaskCard';
import { Task, TaskStatus } from '../models/models';

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

const taskStatusText: { [K in TaskStatus]: string } = {
  [TaskStatus.todo]: 'Todo',
  [TaskStatus.inProgress]: 'In Progress',
  [TaskStatus.done]: 'Done',
};

export const TaskLane = ({ tasks }: Props) => {
  const todoTasks = tasks.filter(task => task.status === TaskStatus.todo);
  const inProgressTasks = tasks.filter(task => task.status === TaskStatus.inProgress);
  const doneTasks = tasks.filter(task => task.status === TaskStatus.done);

  return (
    <section className={baseStyle}>
      <div>
        <header>
          <span className={headerTextStyle}>
            {taskStatusText.TODO}: {todoTasks.length}
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
            {taskStatusText.IN_PROGRESS}: {inProgressTasks.length}
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
            {taskStatusText.DONE}: {doneTasks.length}
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
