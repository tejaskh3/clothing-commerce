import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithPhoneNumber,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc, // to be exact it is get doc data
  setDoc // to be exact it is set doc data
} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDTFopdOwnNHyQGQDGZ-0ACJnBta0OREKI',
  authDomain: 'clotihng-commerce.firebaseapp.com',
  projectId: 'clotihng-commerce',
  storageBucket: 'clotihng-commerce.appspot.com',
  messagingSenderId: '547845582628',
  appId: '1:547845582628:web:1de7fc56e5f7221a24cdb1'
};
const firebaseApp = initializeApp(firebaseConfig);

const Googleprovider = new GoogleAuthProvider();
Googleprovider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, Googleprovider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userDetails,
  additionalInformation = {}
) => {
  if (!userDetails) return;
  const userDocRef = doc(db, 'users', userDetails.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userDetails;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};
export const createUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
