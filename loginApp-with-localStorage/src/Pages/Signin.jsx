import React from 'react'
import SIGNIN from '../assets/images/Signin_img.webp';

const Signin_img = () => {
  return (
<>
      <div className="right_data">
        <div className="sign_img mt-5" style={{ width: "100%" }}>
          <img src={SIGNIN} style={{ maxWidth: 400 }} />
        </div>
      </div>
    </>  )
}

export default Signin_img;