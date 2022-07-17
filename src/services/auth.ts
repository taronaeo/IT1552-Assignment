import {
  User,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut as signOutFirebase,
} from 'firebase/auth';

import { getFirebase } from '.';

export function onAuth(callback: (user: User | null) => void) {
  const { auth } = getFirebase();
  return onAuthStateChanged(auth, callback);
}

export function signInWithGoogle() {
  const { auth } = getFirebase();
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

export function signOut() {
  const { auth } = getFirebase();
  return signOutFirebase(auth);
}
