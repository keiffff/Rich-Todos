import React from 'react';
import { css } from 'emotion';
import { storiesOf } from '@storybook/react';
import { TaskStatus } from '../models/models';

import { TaskCard } from '../components/TaskCard';

const taskCardContainerStyle = css({
  width: 328,
});

storiesOf('TaskCard', module).add('basic', () => (
  <div className={taskCardContainerStyle}>
    <TaskCard
      task={{
        id: 0,
        title: 'データ追加用ダイアログを作成',
        content: 'firestoreにデータを追加するためのダイアログを作成する',
        status: TaskStatus.todo,
        labels: ['フロント', '新規'],
        createdAt: null,
        updatedAt: null,
      }}
    />
  </div>
));
