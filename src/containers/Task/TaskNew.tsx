import * as React from 'react';
import { css } from 'emotion';
import { TaskContext } from '../../contexts/task';
import { PageHeaderContext } from '../../contexts/pageHeader';

const offsetStyle = css({
  paddingTop: 72,
});

const formContainerStyle = css({
  width: '70%',
  marginLeft: 20,
  border: '1px solid #d3d3d3',
  borderRadius: 8,
});

export const TaskNewContainer = () => {
  const { taskFormStore } = React.useContext(TaskContext);
  const { pageHeaderStore } = React.useContext(PageHeaderContext);

  React.useEffect(() => pageHeaderStore.setTitle('Add New Task'), []);

  return (
    <div className={offsetStyle}>
      <div className={formContainerStyle}>
        <p>{taskFormStore.title}</p>
      </div>
    </div>
  );
};
