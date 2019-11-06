import * as React from 'react';
import { css } from 'emotion';
import { TaskCard } from './TaskCard';
import { Task } from '../models/models';

type Props = {
  title: string;
  tasks: Task[];
  draggedId: number;
  onChangeDraggedId: (id: number) => void;
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

export const TaskLane = ({ title, tasks, draggedId, onChangeDraggedId }: Props) => {
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
    const draggedTask = tasks.find(task => task.id === draggedId);
    console.log(draggedTask);
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
          {title}: {tasks.length}
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
