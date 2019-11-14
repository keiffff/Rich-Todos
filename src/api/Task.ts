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
  callback,
}: {
  taskAttribute: Pick<Task, 'id' | 'title' | 'content' | 'labels' | 'status'>;
  callback?: () => void;
}) => {
  const doc = firestore()
    .collection(collectionName.tasks)
    .doc(taskAttribute.id.toString());
  await doc.set({
    ...taskAttribute,
    createdAt: firestore.FieldValue.serverTimestamp(),
    updatedAt: firestore.FieldValue.serverTimestamp(),
  });
  doc.onSnapshot(() => callback && callback());
};

export const updateTask = async ({
  updateTaskAttribute,
  targetId,
  callback,
}: {
  updateTaskAttribute: Partial<Pick<Task, 'title' | 'content' | 'labels' | 'status'>>;
  targetId: number;
  callback?: () => void;
}) => {
  const doc = firestore()
    .collection(collectionName.tasks)
    .doc(targetId.toString());
  await doc.update({
    ...updateTaskAttribute,
    updatedAt: firestore.FieldValue.serverTimestamp(),
  });
  doc.onSnapshot(() => callback && callback());
};
