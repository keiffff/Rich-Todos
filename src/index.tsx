import * as React from 'react';
import * as ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from './FirebaseConfig';
import { TaskIndexContainer } from './containers/TaskIndex';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<TaskIndexContainer />, document.getElementById('app'));
