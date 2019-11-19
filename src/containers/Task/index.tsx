import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { paths } from '../../constants/paths';
import { TaskIndexContainer as TaskIndex } from './TaskIndex';
import { TaskShowContainer as TaskShow } from './TaskShow';
import { TaskNewContainer as TaskNew } from './TaskNew';
import { TaskContext } from '../../contexts/task';
import { Task, TaskStatus } from '../../models/models';

export const Tasks = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [status, setStatus] = React.useState(TaskStatus.todo);
  const [labels, setLabels] = React.useState<string[]>([]);
  const resetState = React.useCallback(() => {
    setTitle('');
    setContent('');
    setStatus(TaskStatus.todo);
    setLabels([]);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        taskStore: { tasks, setTasks },
        taskFormStore: {
          title,
          content,
          status,
          labels,
          setTitle,
          setContent,
          setStatus,
          setLabels,
          resetState,
        },
      }}
    >
      <Switch>
        <Route path={paths.tasks.new}>
          <TaskNew />
        </Route>
        <Route path={paths.tasks.show}>
          <TaskShow />
        </Route>
        <Route path={paths.basePath} exact>
          <TaskIndex />
        </Route>
      </Switch>
    </TaskContext.Provider>
  );
};
