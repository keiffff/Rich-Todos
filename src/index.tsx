import * as React from 'react';
import * as ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { FirebaseApp } from './FirebaseApp';
import { makeGlobalStyles } from './globalStyles';
import { firebaseConfig } from './FirebaseConfig';
import { TaskIndexContainer } from './containers/TaskIndex';

makeGlobalStyles();
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <FirebaseApp>
    <TaskIndexContainer />
  </FirebaseApp>,
  document.getElementById('app'),
);
