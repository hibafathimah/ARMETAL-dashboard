
// import React from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const ResetRequest = () => {
  
//   return (
//     <>
//       <ToastContainer />
//       <div className='p-r-container'>
//         <div className='p-r-content-box'>
//           <h2 className='p-r-heading'>Password Assistance</h2>
//           <p className='p-r-text'>Enter your email ID.</p>
//           <p className='p-r-text'>We will send a reset link to reset your password.</p>
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             className='p-r-input'
//           />
//           <br />
//           <button className='p-r-btn' > Request Link</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ResetRequest;


import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ResetReq = () => {
  const [email, setEmail] = useState('');

  const handleRequestLink = async () => {
    try {
      axios.post('http://localhost:3003/auth/user/forgotpassword', { email: email })
        .then((res) => {
          console.log("OTP Sent");
          localStorage.setItem("resetToken", res.data.resetToken)
          toast.success(res.data.message, {
            position: "top-center", autoClose: 1000, style: {
              backgroundColor: "#003d89",
              color: "white",
            }
          });

        }).catch((e) => {
          console.log(e);
          toast.error('Failed to reset password', {
            position: "top-center", autoClose: 1000, style: {
              backgroundColor: "#003d89",
              color: "white"
            }
          });
        })
    } catch (error) {
      toast.error('Failed to reset password');
    }
  };
  return (
    <>
      <ToastContainer />
      <div className='p-r-container'>
        <div className='p-r-content-box'>
          <h2 className='p-r-heading'>Password Assistance</h2>
          <p className='p-r-text'>Enter your email ID.</p>
          <p className='p-r-text'>We will send a reset link to reset your password.</p>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className='p-r-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button className='p-r-btn' onClick={handleRequestLink}> Request Link</button>
        </div>
      </div>
    </>
  );
};

export default ResetReq;