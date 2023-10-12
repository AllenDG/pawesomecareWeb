import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';
import NewUser from '../components/newUser/NewUser';
import LargeWidget from '../components/largeWidget/LargeWidget';

function UserProfile() {
  useDocTitle('Pawsome Care');
  const [editMode, setEditMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showMyBookings, setShowMyBookings] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isPasswordEditMode, setPasswordEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSettingsClick = () => {
    setShowSettings(!showSettings);
    setShowChangePassword(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
  };

  const handleSavePassword = () => {
    // Add your logic to save the new password here
    // You can compare the current password with the stored one and save the new password if it matches
    // You should also handle validation and error messages
    console.log('Saving new password:', passwordData.newPassword);
    setPasswordEditMode(false);
  };

  const handleCancelPassword = () => {
    setPasswordEditMode(false);
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  const handleShowMyBookings = () => {
    setShowMyBookings(!showMyBookings);
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center items-center mt-8 bg-white py-12 lg:py-8 ">
      </div>
      <div>
      <NewUser/>
      </div>
      <div>
        <LargeWidget/>
      </div>
    </>
  );
}

export default UserProfile;
