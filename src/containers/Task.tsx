import * as React from 'react';
import { TaskIndexContainer } from './TaskIndex';
import { TasksContext } from '../contexts';
import { Task } from '../models/models';

export const TaskContainer = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  return (
    <TasksContext.Provider value={{ tasksState: tasks, setTasksState: setTasks }}>
      <TaskIndexContainer />
    </TasksContext.Provider>
  );
};
