import { initializeApp, getApps } from 'firebase/app';
import { Auth, getAuth, connectAuthEmulator } from 'firebase/auth';
import {
  Firestore,
  getFirestore,
  connectFirestoreEmulator,
} from 'firebase/firestore';

import {
  Functions,
  getFunctions,
  connectFunctionsEmulator,
} from 'firebase/functions';

// State check to prevent emulator errors
let isEmulatorInitialized = false;

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
    connectAuthEmulator(auth, 'http://localhost:9099', {
      disableWarnings: true,
    });
    connectFirestoreEmulator(firestore, 'localhost', 8080);
    connectFunctionsEmulator(functions, 'localhost', 5001);
  }
}

export function getFirebase() {
  const services = init();

  if (services.isConfigured && !isEmulatorInitialized) {
    connectToEmulators(services);
    isEmulatorInitialized = true;
  }
  return services;
}
