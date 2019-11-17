import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Firebase } from './components/Firebase';
import { Snackbar } from './components/Snackbar';
import { makeGlobalStyles } from './globalStyles';
import { firebaseConfig } from './FirebaseConfig';
import { App } from './App';

makeGlobalStyles();
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
    <Firebase>
      <Snackbar>
        <App />
      </Snackbar>
    </Firebase>
  </Router>,
  document.getElementById('app'),
);
