import * as React from 'react';
import { Route } from 'react-router-dom';
import { paths } from '../../constants/paths';
import { TaskIndexContainer as TaskIndex } from './TaskIndex';
import { TaskShow } from '../../components/TaskShow';
import { TaskContext } from '../../contexts/task';
import { Task } from '../../models/models';

export const Tasks = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{ taskStore: { tasks, setTasks } }}>
      <Route path={paths.basePath} component={TaskIndex} exact />
      <Route path={paths.tasks.show} component={TaskShow} />
    </TaskContext.Provider>
  );
};
