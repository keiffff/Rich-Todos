import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Snackbar } from './components/Snackbar';
import { makeGlobalStyles } from './globalStyles';
import { firebaseConfig } from './FirebaseConfig';
import { App } from './App';

makeGlobalStyles();
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
    <Snackbar>
      <App />
    </Snackbar>
  </Router>,
  document.getElementById('app'),
);
