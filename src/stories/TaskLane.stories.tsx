import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TaskStatus } from '../models/models';

import { TaskLane } from '../components/TaskLane';

storiesOf('TaskLane', module).add('basic', () => (
  <TaskLane
    status={TaskStatus.todo}
    tasks={[
      {
        id: 0,
        title: 'React Routerを導入',
        content: 'React Routerを導入 & 空のタスク詳細ページを作る',
        status: TaskStatus.todo,
        labels: ['フロント', '新規'],
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 1,
        title: '取得したデータをコンポーネントに埋め込む',
        content: 'seedデータをコンポーネントに埋め込む',
        status: TaskStatus.todo,
        labels: ['サーバー', '改修'],
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 2,
        title: 'タスクをドラッグアンドドロップできるようにする',
        content: 'タスクをドラッグアンドドロップできるようにする',
        status: TaskStatus.todo,
        labels: ['フロント', 'バグ修正'],
        createdAt: null,
        updatedAt: null,
      },
    ]}
    onChangeDraggedId={action('Drag Task')}
    onUpdateTaskStatus={() => {}}
    onClickTask={action('Click Task')}
  />
));
