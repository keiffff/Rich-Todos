import * as React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FirebaseContext } from '../contexts/firebase';

type Props = {
  children: React.ReactNode;
};

export const Firebase = ({ children }: Props) => {
  const db = firebase.firestore();

  return <FirebaseContext.Provider value={{ firebaseStore: { db } }}>{children}</FirebaseContext.Provider>;
};
