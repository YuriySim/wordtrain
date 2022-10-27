import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  where,
  query,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABF_aqIGsUl68cHoPt4tsHwlHTjCtvzTY",
  authDomain: "wordtrain-b3030.firebaseapp.com",
  projectId: "wordtrain-b3030",
  storageBucket: "wordtrain-b3030.appspot.com",
  messagingSenderId: "947832077386",
  appId: "1:947832077386:web:18fd05a15076ede04e7ab3",
  measurementId: "G-PERJC8WLLG"
};

// Initialize Firebase
const app       = initializeApp(firebaseConfig);
const auth      = getAuth(app);
const db        = getFirestore(app);
const analytics = getAnalytics(app);

export const useLogInWithEmailAndPassword = (email: string, password: string): any => {
  const [error, setError] = useState('');

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError(err.message)
    }
  }

  return [login, error]
};

export const useRegisterWithEmailAndPassword = (email: string, password: string, name: string): any => {
  const [error, setError] = useState('');

  const register = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const uid = res.user.uid

      await addDoc(collection(db, 'users'), {
        uid,
        authProvider: 'local',
        email,
        name,
      });
    } catch (err: any) {
      setError(err.message)
    }
  }

  return [register, error]
};

export const useLogout = () => {
  const navigate = useNavigate()

  const logout = () => {
    signOut(auth).then(() => navigate('/login', { replace: true }));
  }

  return logout
};

export const useGetData = () => {
  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    } catch (err: any) {
    }
  }

  return getData
}

export const useGetUserData = (uid: any) => {
  const getUserData = async () => {
    var result;
    try {
      const q = await query(collection(db, 'users'), where('uid', '==', uid));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {result = doc.data()});
      return result
    } catch (err: any) {
    }
  }

  return getUserData
}

export {
  auth,
  db,
  analytics,
};