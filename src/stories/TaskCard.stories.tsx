import React from 'react';

import { storiesOf } from '@storybook/react';
import { TaskStatus } from '../models/models';

import { TaskCard } from '../components/TaskCard';

const components = storiesOf('Components', module);
components.add('TaskCard', () => (
  <TaskCard
    task={{
      id: 0,
      title: 'タスクのタイトル',
      content: 'タスクの内容',
      status: TaskStatus.todo,
      labels: ['フロント', '新規'],
      createdAt: null,
      updatedAt: null,
    }}
  />
));
