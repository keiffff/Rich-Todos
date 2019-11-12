import * as React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FirebaseContext } from './contexts';

type Props = {
  children: React.ReactNode;
};

export const FirebaseApp = ({ children }: Props) => {
  const db = firebase.firestore();

  return <FirebaseContext.Provider value={{ db }}>{children}</FirebaseContext.Provider>;
};
