import { initializeApp, getApps } from 'firebase/app';
import {
  Auth,
  getAuth,
  connectAuthEmulator,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  Firestore,
  getFirestore,
  connectFirestoreEmulator,
  collection,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';

import {
  Functions,
  getFunctions,
  connectFunctionsEmulator,
} from 'firebase/functions';

type ConnectToEmulators = {
  auth: Auth;
  firestore: Firestore;
  functions: Functions;
};

const firebaseConfig = {
  apiKey: 'AIzaSyBcm7p8sKEcYW3yg7Ijq0YNNEGYt8WKw-o',
  authDomain: 'it1552-assignment.firebaseapp.com',
  projectId: 'it1552-assignment',
  storageBucket: 'it1552-assignment.appspot.com',
  messagingSenderId: '336742961332',
  appId: '1:336742961332:web:67b0f15d2f3e821579c7e1',
};

function init() {
  const isConfigured = getApps().length > 0;
  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  const functions = getFunctions(firebaseApp);

  return { firebaseApp, auth, firestore, functions, isConfigured };
}

function connectToEmulators({
  auth,
  firestore,
  functions,
}: ConnectToEmulators) {
  if (location.hostname === 'localhost') {
    connectAuthEmulator(auth, 'http://localhost:9099');
    connectFirestoreEmulator(firestore, 'localhost', 8080);
    connectFunctionsEmulator(functions, 'localhost', 5001);
  }
}

export function getFirebase() {
  const services = init();

  if (services.isConfigured) {
    connectToEmulators(services);
  }
  return services;
}

export function onAuth(callback: Function) {
  const { auth } = getFirebase();
  return onAuthStateChanged(auth, (user) => {
    console.log(user);
    callback(user);
  });
}

export function streamUsers() {
  const { firestore } = getFirebase();
  const usersCol = collection(firestore, 'users');
  const usersQuery = query(usersCol, orderBy('createdAt'));

  const stream = (callback: Function) =>
    onSnapshot(usersQuery, (snapshot) => {
      const messages = snapshot.docs.map((doc) => doc.data());
      callback(messages);
    });

  return { stream };
}
