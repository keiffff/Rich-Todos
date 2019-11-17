import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { paths } from '../../constants/paths';
import { TaskIndexContainer as TaskIndex } from './TaskIndex';
import { TaskShowContainer as TaskShow } from './TaskShow';
import { TaskContext } from '../../contexts/task';
import { Task } from '../../models/models';

export const Tasks = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{ taskStore: { tasks, setTasks } }}>
      <Switch>
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
