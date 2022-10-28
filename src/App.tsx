import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import DictionaryPage from './pages/DictionaryPage';
import TrainingPage from './pages/TrainingPage';
import WordPage from './pages/WordPage';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function App() {
  const [user] = useAuthState(auth);

  return (
    <Routes>
      <Route path='/' element={ <Layout/> }>
        <Route path="/" element={ <HomePage /> } />

        {user
          ?
          <>
            <Route path="/profile" element={ <ProfilePage /> } />
            <Route path="/training" element={ <TrainingPage /> } />
            <Route path="/dictionary" element={ <DictionaryPage /> } />
            <Route path="/dictionary/:word" element={ <WordPage /> } />

            <Route path="/login" element={ <Navigate to="/dictionary" replace /> } />
            <Route path="/registration" element={ <Navigate to="/dictionary" replace /> } />
          </>
          :
          <>
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/registration" element={ <RegistrationPage /> } />
          </>
        }

        <Route path="*" element={ <Navigate to="/" replace /> } />
      </Route>
    </Routes>
  );
}

export default App;
