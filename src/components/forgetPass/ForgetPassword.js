import React, { useState } from 'react';
import { useDocTitle } from '../../components/CustomHook';
import NavBar from '../../components/Navbar/NavBar';


const ForgotPassword = () => {
  useDocTitle('Pawsome Care');
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    // ... (same logic as before)
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
        {/* Existing content */}
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="forgot-password-container">
          <h2>Forgot Password</h2>
          {emailSent ? (
            <div>
              <p>An email has been sent to {email} with instructions to reset your password.</p>
              <p>Please check your inbox and follow the instructions.</p>
            </div>
          ) : (
            <div>
              <p>Enter your email address to reset your password.</p>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className="border border-gray-300 rounded-md p-2 mb-2"
                />
                <button
                  onClick={handleResetPassword}
                  className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700"
                >
                  Reset Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
