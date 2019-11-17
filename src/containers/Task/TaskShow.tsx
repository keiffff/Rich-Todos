import * as React from 'react';
import { useParams } from 'react-router-dom';
import { TaskShow } from '../../components/TaskShow';
import { TaskStatus } from '../../models/models';

export const TaskShowContainer = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <TaskShow
      task={{
        id: 0,
        title: '',
        content: '',
        labels: [],
        status: TaskStatus.todo,
        createdAt: null,
        updatedAt: null,
      }}
    />
  );
};
