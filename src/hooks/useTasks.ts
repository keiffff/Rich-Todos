import * as React from 'react';
import { collectionName } from '../constants/collectionName';
import { FirebaseContext } from '../contexts';
import { Task } from '../models/models';

export const useTasks = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  const firebaseRef = React.useRef(React.useContext(FirebaseContext));

  React.useEffect(() => {
    const { db } = firebaseRef.current;
    if (!db) throw new Error('Firestore is not initialized');
    const query = db.collection(collectionName.tasks);

    const load = async () => {
      setLoading(true);
      try {
        const snapShot = await query.get();
        const tasksData = snapShot.docs.map(doc => doc.data() as Task);
        setTasks(tasksData);
        setError(null);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    load();
  }, []);

  return { tasks, loading, error };
};
