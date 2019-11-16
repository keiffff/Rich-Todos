import * as React from 'react';

type FirebaseContextValue = {
  db: firebase.firestore.Firestore | null;
};

export const FirebaseContext = React.createContext<FirebaseContextValue>({
  db: null,
});
