

import { Button } from 'bootstrap';
import React from 'react';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const history = useNavigate();

  const users = JSON.parse(localStorage.getItem('users'));
  const currentUser = users[users.length - 1]; // Get the last registered user
   // Get the last registered user
    
  const handleLogout = () => {
    localStorage.removeItem("user_login")
    // localStorage.removeItem("users")
    history("/");
  };

  return (
    <>
      <h1>Welcome, Mr. {currentUser.fullname}!</h1>
      <h3>woow..Assignment complete..!</h3>
      <button onClick={handleLogout}>Logout</button>
      {/* <button onClick={() => {
        localStorage.removeItem('users');
        window.location.href = '/login';
      }}>Logout</button> */}
    </>
    
  );
};

export default Dashboard;