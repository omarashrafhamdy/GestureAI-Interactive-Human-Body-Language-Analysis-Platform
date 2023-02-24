import './App.css';

import React from 'react';

// import { RequireAuth } from 'react-auth-kit';
import {
  Route,
  Routes
} from 'react-router-dom';

import LandingPage from './gp trial/pages/landingPage/LandingPage';
import LoginForm from './gp trial/pages/login/LoginForm';
import ProfilePage from './gp trial/pages/profilePage/ProfilePage';
import RegistrationForm from './gp trial/pages/signup/RegistrationForm';

function App() {
  return (
    <div className="App" >
      <Routes>
          <Route path='/signin' element={<LoginForm/>} />
          <Route path='/Signup' element={<RegistrationForm/>} />
          <Route path='/' element={<LandingPage/>} />
          <Route path='/profilepage' element={<ProfilePage/>} />
          {/* <Route path='/Profilepage' element={<RequireAuth loginPath={'/signin'}> <ProfilePage/> </RequireAuth>}/> */}
        </Routes>
    </div>
  );
}

export default App;
