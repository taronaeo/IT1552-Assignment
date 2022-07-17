import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { getFirebase } from '.';

export function streamUsers() {
  const { firestore } = getFirebase();
  const usersCol = collection(firestore, 'users');
  const usersQuery = query(usersCol, orderBy('createdAt'));

  const stream = (callback: Function) =>
    onSnapshot(usersQuery, (snapshot) => {
      const users = snapshot.docs.map((doc) => doc.data());
      callback(users);
    });

  return { stream };
}
