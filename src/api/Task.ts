import { firestore } from 'firebase/app';
import { collectionName } from '../constants/collectionName';
import { Task } from '../models/models';

export const fetchTasks = async () => {
  const collection = firestore().collection(collectionName.tasks);
  const snapShot = await collection.get();

  return snapShot.docs.map(doc => doc.data() as Task);
};

export const showTask = async ({ targetId }: { targetId: number }) => {
  const collection = firestore().collection(collectionName.tasks);
  const snapShot = await collection.doc(targetId.toString()).get();

  return snapShot.data() as Task;
};

export const addTask = async ({
  taskAttribute,
}: {
  taskAttribute: Pick<Task, 'id' | 'title' | 'content' | 'labels' | 'status'>;
}) => {
  const doc = firestore()
    .collection(collectionName.tasks)
    .doc(taskAttribute.id.toString());
  await doc.set({
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
  const doc = firestore()
    .collection(collectionName.tasks)
    .doc(targetId.toString());
  await doc.update({
    ...updateTaskAttribute,
    updatedAt: firestore.FieldValue.serverTimestamp(),
  });
};

export const deleteTasks = async ({ targetIds }: { targetIds: number[] }) => {
  const collection = firestore().collection(collectionName.tasks);
  for await (const id of targetIds) {
    collection.doc(id.toString()).delete();
  }
};
