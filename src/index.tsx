import * as React from 'react';
import * as ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { FirebaseApp } from './FirebaseApp';
import { makeGlobalStyles } from './globalStyles';
import { firebaseConfig } from './FirebaseConfig';
import { TaskContainer } from './containers/Task';

makeGlobalStyles();
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <FirebaseApp>
    <TaskContainer />
  </FirebaseApp>,
  document.getElementById('app'),
);
