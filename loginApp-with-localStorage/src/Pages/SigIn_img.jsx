import React from 'react'
import SIGIN from '../assets/images/signin.webp'

const SigIn_img = () => {
  return (
    <>
           <div className="right_data">
        <div className="sign_img mt-3" style={{ width: "100%" }}>
          <img src={SIGIN} style={{ maxWidth: 480 }} />
        </div>
      </div>
    </>
)
}

export default SigIn_img