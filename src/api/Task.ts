import { firestore } from 'firebase/app';
import { collectionName } from '../constants/collectionName';
import { Task } from '../models/models';

export const fetchTasks = async () => {
  const collection = firestore().collection(collectionName.tasks);
  const snapShot = await collection.get();
  const tasksData = snapShot.docs.map(doc => doc.data() as Task);

  return tasksData;
};

export const addTask = async ({
  taskAttribute,
}: {
  taskAttribute: Pick<Task, 'id' | 'title' | 'content' | 'labels' | 'status'>;
}) => {
  const collection = firestore().collection(collectionName.tasks);
  await collection.doc(taskAttribute.id.toString()).set({
    ...taskAttribute,
    createdAt: firestore.FieldValue.serverTimestamp(),
    updatedAt: firestore.FieldValue.serverTimestamp(),
  });
};

export const updateTask = async ({
  updateTaskAttribute,
  targetId,
}: {
  updateTaskAttribute: Partial<Pick<Task, 'title' | 'content' | 'labels' | 'status'>>;
  targetId: number;
}) => {
  const collection = firestore().collection(collectionName.tasks);
  await collection.doc(targetId.toString()).update({
    ...updateTaskAttribute,
    updatedAt: firestore.FieldValue.serverTimestamp(),
  });
};
