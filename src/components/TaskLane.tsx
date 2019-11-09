import * as React from 'react';
import { css } from 'emotion';
import { TaskCard } from './TaskCard';
import { Task, TaskStatus } from '../models/models';
import { taskStatusText } from '../constants/constants';

type Props = {
  status: TaskStatus;
  tasks: Task[];
  onChangeDraggedId: (id: number) => void;
  onEditTaskStatus: (status: TaskStatus) => void;
};

const baseStyle = css({
  padding: 16,
  border: '1px solid #d3d3d3',
  borderRadius: 8,
  '& + &': {
    marginLeft: 16,
  },
});

const baseDragOverStyle = css(baseStyle, {
  border: '2px dashed #222222',
  backgroundColor: '#E0E0E0',
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

export const TaskLane = ({ status, tasks, onChangeDraggedId, onEditTaskStatus }: Props) => {
  const baseRef = React.useRef<HTMLDivElement>(null);
  const handleDrag = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    onChangeDraggedId(Number(e.currentTarget.dataset.id));
  };
  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    if (!baseRef.current) return;
    baseRef.current.classList.add(baseDragOverStyle);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    if (!baseRef.current) return;
    baseRef.current.classList.remove(baseDragOverStyle);
  };
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    if (!baseRef.current) return;
    baseRef.current.classList.remove(baseDragOverStyle);
    onEditTaskStatus(status);
    onChangeDraggedId(-1);
  };

  return (
    <div
      className={baseStyle}
      ref={baseRef}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <header>
        <span className={headerTextStyle}>
          {taskStatusText[status]}: {tasks.length}
        </span>
      </header>
      <ul className={taskListStyle}>
        {tasks.map(task => (
          <li key={task.id} draggable data-id={task.id} onDrag={handleDrag}>
            <TaskCard task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};
