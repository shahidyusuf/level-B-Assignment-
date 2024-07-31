import React from "react";
import LOGO from '../assets/images/logoJp.png';
const NavbarApp = () => {
  return (
    <nav className="flex mx-52 justify-start">
      <img src={LOGO} width={200} />
      <div className="flex font-bold mx-6 py-5 space-x-6">
        <h3>Home</h3>
        <h3>About us</h3>
        <h3>Trainings</h3>
        <h3>Contact us</h3>
      </div>
    </nav>
  );
};

export default NavbarApp;
