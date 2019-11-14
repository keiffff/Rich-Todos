import * as React from 'react';
import { TaskIndex } from '../components/TaskIndex';
import { Task, TaskStatus } from '../models/models';
import { fetchTasks, addTask } from '../api/Task';
import { TasksContext } from '../contexts';

export const TaskIndexContainer = () => {
  const { tasksState, setTasksState } = React.useContext(TasksContext);
  const handleEditTaskStatus = ({ status, targetId }: { status: TaskStatus; targetId: number }) => {
    setTasksState((prevState: Task[]) => {
      const targetTask = prevState.find(task => task.id === targetId);
      const rests = prevState.filter(task => task.id !== targetId);

      return [...rests, { ...targetTask, status } as Task];
    });
  };
  const handleAddNewTask = ({
    taskAttributeWithoutId,
  }: {
    taskAttributeWithoutId: Pick<Task, 'title' | 'content' | 'labels' | 'status'>;
  }) => {
    const newTaskId = tasksState.reduce((maxId, item) => (maxId < item.id ? item.id : maxId), 0) + 1;
    addTask({ taskAttribute: { ...taskAttributeWithoutId, id: newTaskId } });
  };
  React.useEffect(() => {
    const load = async () => {
      const tasksData = await fetchTasks();
      setTasksState(tasksData);
    };

    load();
  }, []);

  return <TaskIndex tasks={tasksState} onEditTaskStatus={handleEditTaskStatus} onAddNewTask={handleAddNewTask} />;
};
