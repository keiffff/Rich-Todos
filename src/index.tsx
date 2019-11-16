import * as React from 'react';
import * as ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { FirebaseApp } from './FirebaseApp';
import { makeGlobalStyles } from './globalStyles';
import { firebaseConfig } from './FirebaseConfig';
import { Tasks } from './containers/Task/index';

makeGlobalStyles();
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <FirebaseApp>
    <Tasks />
  </FirebaseApp>,
  document.getElementById('app'),
);
