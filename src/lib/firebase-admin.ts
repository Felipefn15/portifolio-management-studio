import { initializeApp, getApps, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

let app: App;

function getFirebaseAdmin() {
  if (getApps().length === 0) {
    app = initializeApp();
  } else {
    app = getApps()[0];
  }

  const firestore = getFirestore(app);

  return { app, firestore };
}

export { getFirebaseAdmin };
