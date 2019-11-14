import * as React from 'react';
import { firestore } from 'firebase/app';
import { collectionName } from '../constants/collectionName';
import { FirebaseContext } from '../contexts';
import { Task } from '../models/models';

export const useFetchTasks = () => {
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
  }, [tasks]);

  return { tasks, loading, error };
};

export const addTask = async ({
  taskAttribute,
}: {
  taskAttribute: Pick<Task, 'id' | 'title' | 'content' | 'labels' | 'status'>;
}) => {
  const db = firestore();
  if (!db) throw new Error('Firestore is not initialized');
  const query = db.collection(collectionName.tasks);
  await query.doc(taskAttribute.id.toString()).set({
    ...taskAttribute,
    createdAt: firestore.FieldValue.serverTimestamp(),
    updatedAt: firestore.FieldValue.serverTimestamp(),
  });
};
