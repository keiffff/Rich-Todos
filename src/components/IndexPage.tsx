import * as React from 'react';
import ClassNames from 'classnames';
import { css } from 'emotion';
import { AppBar, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { TaskLane } from './TaskLane';
import { tasks } from '../mocks/index';
import { Task, TaskStatus } from '../models/models';

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

const taskLanesContainerStyle = css({
  display: 'flex',
  flex: 'auto',
  padding: 20,
});

const addButtonContainerStyle = css({
  position: 'fixed',
  bottom: 20,
  right: 20,
});

const taskStatusText: { [K in TaskStatus]: string } = {
  [TaskStatus.todo]: 'Todo',
  [TaskStatus.inProgress]: 'In Progress',
  [TaskStatus.done]: 'Done',
};

export const IndexPage = () => {
  const todoTasks = (tasks as Task[]).filter(task => task.status === TaskStatus.todo);
  const inProgressTasks = (tasks as Task[]).filter(task => task.status === TaskStatus.inProgress);
  const doneTasks = (tasks as Task[]).filter(task => task.status === TaskStatus.done);

  return (
    <div className={ClassNames(offsetStyle)}>
      <AppBar className={headerStyle} color="default">
        <div className={headerTitleContainerStyle}>
          <h1 className={headerTitleStyle}>Rich Todos</h1>
        </div>
      </AppBar>
      <section className={taskLanesContainerStyle}>
        <TaskLane title={taskStatusText.TODO} tasks={todoTasks} />
        <TaskLane title={taskStatusText.IN_PROGRESS} tasks={inProgressTasks} />
        <TaskLane title={taskStatusText.DONE} tasks={doneTasks} />
      </section>
      <div className={addButtonContainerStyle}>
        <Fab color="primary">
          <Add />
        </Fab>
      </div>
    </div>
  );
};
