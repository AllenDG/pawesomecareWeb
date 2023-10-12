import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

import UserProfile from './pages/UserProfile';
import Login from './components/Auth/login/Login';
import Signup from './components/Auth/register/Signup';
import ForgotPassword from './components/forgetPass/ForgetPassword';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Pawsome Care");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-appointment" element={<Appointment />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/forget-password' element={<ForgotPassword/>} />
            <Route path="/user-profile" element={<UserProfile />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
