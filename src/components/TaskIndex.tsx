import * as React from 'react';
import ClassNames from 'classnames';
import { css } from 'emotion';
import { AppBar, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { TaskLane } from './TaskLane';
import { CreateTaskDialog } from './CreateTaskDialog';
import { Task, TaskStatus } from '../models/models';

type Props = {
  tasks: Task[];
  onEditTaskStatus: ({ status, targetId }: { status: TaskStatus; targetId: number }) => void;
};

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

export const TaskIndex = ({ tasks, onEditTaskStatus }: Props) => {
  const [draggedId, setDraggedId] = React.useState(-1);
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const handleChangeDraggedId = React.useCallback((id: number) => setDraggedId(id), []);
  const handleClickAddButton = React.useCallback(() => setDialogVisible(true), []);
  const handleCloseDialog = React.useCallback(() => setDialogVisible(false), []);
  const handleEditTaskStatus = (status: TaskStatus) => {
    onEditTaskStatus({ status, targetId: draggedId });
  };
  const statusLists = [TaskStatus.todo, TaskStatus.inProgress, TaskStatus.done];

  return (
    <>
      <div className={ClassNames(offsetStyle)}>
        <AppBar className={headerStyle} color="default">
          <div className={headerTitleContainerStyle}>
            <h1 className={headerTitleStyle}>Rich Todos</h1>
          </div>
        </AppBar>
        <section className={taskLanesContainerStyle}>
          {statusLists.map(status => (
            <TaskLane
              key={status}
              status={status}
              tasks={tasks.filter(task => task.status === status)}
              onChangeDraggedId={handleChangeDraggedId}
              onEditTaskStatus={handleEditTaskStatus}
            />
          ))}
        </section>
        <div className={addButtonContainerStyle}>
          <Fab color="primary" onClick={handleClickAddButton}>
            <Add />
          </Fab>
        </div>
      </div>
      <CreateTaskDialog open={dialogVisible} onClose={handleCloseDialog} />
    </>
  );
};
