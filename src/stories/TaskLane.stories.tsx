import React from 'react';
import { css } from 'emotion';
import { storiesOf } from '@storybook/react';
import { TaskStatus } from '../models/models';

import { TaskLane } from '../components/TaskLane';

const taskLanesContainerStyle = css({
  display: 'flex',
  flex: 'auto',
  padding: 20,
});

storiesOf('TaskLane', module).add('with data', () => (
  <div className={taskLanesContainerStyle}>
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
      ]}
      onChangeDraggedId={console.log}
      onUpdateTaskStatus={console.log}
      onClickTask={console.log}
    />
    <TaskLane
      status={TaskStatus.inProgress}
      tasks={[
        {
          id: 1,
          title: '取得したデータをコンポーネントに埋め込む',
          content: 'seedデータをコンポーネントに埋め込む',
          status: TaskStatus.todo,
          labels: ['サーバー', '改修'],
          createdAt: null,
          updatedAt: null,
        },
      ]}
      onChangeDraggedId={console.log}
      onUpdateTaskStatus={console.log}
      onClickTask={console.log}
    />
    <TaskLane
      status={TaskStatus.done}
      tasks={[
        {
          id: 2,
          title: 'タスクをドラッグアンドドロップできるようにする',
          content: 'タスクをドラッグアンドドロップできるようにする',
          status: TaskStatus.done,
          labels: ['フロント', 'バグ修正'],
          createdAt: null,
          updatedAt: null,
        },
      ]}
      onChangeDraggedId={console.log}
      onUpdateTaskStatus={console.log}
      onClickTask={console.log}
    />
  </div>
));
