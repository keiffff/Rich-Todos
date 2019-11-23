import * as React from 'react';
import ClassNames from 'classnames';
import { css } from 'emotion';
import { Fab, Tooltip } from '@material-ui/core';
import { Add, Delete } from '@material-ui/icons';
import { LoadingScreen } from '../LoadingScreen';
import { TaskLane } from '../TaskLane';
import { CreateTaskDialogContainer as CreateTaskDialog } from '../../containers/Task/CreateTaskDialog';
import { DeleteTaskDialog } from '../DeleteTaskDialog';
import { Task, TaskStatus } from '../../models/models';
import { statusLists } from '../../constants/constants';

type Props = {
  tasks: Task[];
  onUpdateTaskStatus: ({ status, targetId }: { status: TaskStatus; targetId: number }) => void;
  onAddNewTask: ({
    taskAttributeWithoutId,
  }: {
    taskAttributeWithoutId: Pick<Task, 'title' | 'content' | 'labels' | 'status'>;
  }) => void;
  onClickTask: (id: number) => void;
  loading: boolean;
};

const offsetStyle = css({
  paddingTop: 72,
});

const taskLanesContainerStyle = css({
  display: 'flex',
  flex: 'auto',
  padding: 20,
});

const deleteButtonContainerStyle = css({
  position: 'fixed',
  bottom: 90,
  right: 20,
});

const addButtonContainerStyle = css({
  position: 'fixed',
  bottom: 20,
  right: 20,
});

export const TaskIndex = ({ tasks, onUpdateTaskStatus, onAddNewTask, onClickTask, loading }: Props) => {
  const [draggedId, setDraggedId] = React.useState(-1);
  const [deleteTaskDialogVisible, setDeleteTaskDialogVisible] = React.useState(false);
  const [createTaskDialogVisible, setCreateTaskDialogVisible] = React.useState(false);
  const handleChangeDraggedId = React.useCallback((id: number) => setDraggedId(id), []);
  const handleClickDeleteButton = React.useCallback(() => setDeleteTaskDialogVisible(true), []);
  const handleCloseDeleteTaskDialog = React.useCallback(() => setDeleteTaskDialogVisible(false), []);
  const handleClickAddButton = React.useCallback(() => setCreateTaskDialogVisible(true), []);
  const handleCloseCreateTaskDialog = React.useCallback(() => setCreateTaskDialogVisible(false), []);
  const handleUpdateTaskStatus = React.useCallback(
    (status: TaskStatus) => {
      const draggedTask = tasks.find(task => task.id === draggedId);
      if (!draggedTask || (!!draggedTask && draggedTask.status === status)) return;
      onUpdateTaskStatus({ status, targetId: draggedId });
    },
    [draggedId, tasks],
  );

  return (
    <>
      <div className={ClassNames(offsetStyle)}>
        <section className={taskLanesContainerStyle}>
          {statusLists.map(status => (
            <TaskLane
              key={status}
              status={status}
              tasks={tasks.filter(task => task.status === status)}
              onChangeDraggedId={handleChangeDraggedId}
              onUpdateTaskStatus={handleUpdateTaskStatus}
              onClickTask={onClickTask}
            />
          ))}
        </section>
        <div className={deleteButtonContainerStyle}>
          <Tooltip title="タスクを一括削除" placement="top">
            <Fab onClick={handleClickDeleteButton}>
              <Delete />
            </Fab>
          </Tooltip>
        </div>
        <div className={addButtonContainerStyle}>
          <Tooltip title="新規タスク追加">
            <Fab color="primary" onClick={handleClickAddButton}>
              <Add />
            </Fab>
          </Tooltip>
        </div>
      </div>
      <DeleteTaskDialog
        open={deleteTaskDialogVisible}
        onClose={handleCloseDeleteTaskDialog}
        tasks={tasks}
        statuses={statusLists}
      />
      <CreateTaskDialog
        open={createTaskDialogVisible}
        onClose={handleCloseCreateTaskDialog}
        onAddNewTask={onAddNewTask}
      />
      <LoadingScreen loading={loading} />
    </>
  );
};
