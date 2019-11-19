import * as React from 'react';
import { css } from 'emotion';
import { TaskContext } from '../../contexts/task';
import { PageHeaderContext } from '../../contexts/pageHeader';

const offsetStyle = css({
  paddingTop: 72,
});

export const TaskNewContainer = () => {
  const { taskFormStore } = React.useContext(TaskContext);
  const { pageHeaderStore } = React.useContext(PageHeaderContext);

  React.useEffect(() => pageHeaderStore.setTitle('Add New Task'), []);

  return (
    <div className={offsetStyle}>
      <p>{taskFormStore.title}</p>
      <p>新しいタスクを追加</p>
    </div>
  );
};
