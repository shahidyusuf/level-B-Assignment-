import React, { useState } from "react";
import "./loginsignup.css";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdPassword } from "react-icons/md";

const LoginSignup = () => {
    const [action, setAction] = useState("Login")
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> :
        <div className="input">
          <FaUser style={{margin:"0px 30px"}} />
          <input type="text" placeholder="Name" />
        </div>
        }
        <div className="input">
          <MdEmail style={{margin:"0px 30px"}} />
          <input type="email:" placeholder="Email-Id" />
        </div>
        <div className="input">
          <MdPassword style={{margin:"0px 30px"}} />
          <input type="Password:" placeholder="password" />
        </div>
      </div>
      {
      action === "Sign Up" ? <div></div> :
      <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
      }
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>SignUp</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
