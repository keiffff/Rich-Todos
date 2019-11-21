import * as React from 'react';
import { Task } from '../../models/models';

type Props = {
  task: Task;
};

export const TaskShow = ({ task }: Props) => {
  return (
    <>
      <h1>{task.title}</h1>
      <p>{task.content}</p>
    </>
  );
};
