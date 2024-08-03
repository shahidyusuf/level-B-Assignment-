import React from "react";
import SIGNUP from "../assets/images/signup.png";


const Sign_img = () => {
  return (
    <>
      <div className="right_data">
        <div className="sign_img mt-5" style={{ width: "100%" }}>
          <img src={SIGNUP} style={{ maxWidth: 400 }} />
        </div>
      </div>
    </>
  );
};

export default Sign_img;
