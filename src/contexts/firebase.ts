import * as React from 'react';

type FirebaseStore = {
  firebaseStore: {
    db: firebase.firestore.Firestore | null;
  };
};

export const FirebaseContext = React.createContext<FirebaseStore>({
  firebaseStore: {
    db: null,
  },
});
