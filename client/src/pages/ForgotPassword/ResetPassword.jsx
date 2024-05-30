// import React from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

 
// const ResetPassword = () => {
  
//   return (
//     <>
//       <ToastContainer />
//       <div className='p-r-container'>
//         <div className='reset-content'>
//           <h2 className='reset-heading'>Reset Password</h2>
//           <p className='reset-text'>Set your new password </p>
//           <p className='reset-text'>to securely access your account.</p>
//           <br />
//           <div className='reset-form'>
//             <label htmlFor="password" className='label-text'>New password</label><br />
//             <input
//               type="password"
//               name="password"
//               className='reset-cp'
//             />
//             <br />
//           </div>
//           <button className='update-btn' > Update Password</button>
//         </div>
//       </div>
//     </>
//   );
// };
 
// export default ResetPassword;

// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
 
// const ResetPass = () => {
//   const {userId } = useParams();
//   const resetToken = useParams().resetToken; 
//   const navigate = useNavigate() 
//   console.log("Reset token:", resetToken);
//   const [password, setPassword] = useState('');
 
//   const handleResetPassword = async () => {
//     try {
//       const response = await axios.put(`http://localhost:3003/auth/user/resetpassword/${resetToken}/${userId}`, { password });
//       console.log("Password reset successful");
//       toast.success(response.data.message, {
//         position: "top-center",
//         autoClose: 3000,
//         style: {
//           backgroundColor: "#003d89",
//           color: "white",
//         },onClose:()=>{navigate('/login')}
//       });
//     } catch (error) {
//       console.error('Failed to reset password:', error.response.data.error);
//       toast.error('Failed to reset password', {
//         position: "top-center",
//         autoClose: 3000,
//         style: {
//           backgroundColor: "#003d89",
//           color: "white"
//         }
//       });
//     }
//   };
 
//   return (
//     <>
//       <ToastContainer />
//       <div className='p-r-container'>
//         <div className='reset-content'>
//           <h2 className='reset-heading'>Reset Password</h2>
//           <p className='reset-text'>Set your new password </p>
//           <p className='reset-text'>to securely access your account.</p>
//           <br />
//           <div className='reset-form'>
//             <label htmlFor="password" className='label-text'>New password</label><br />
//             <input
//               type="password"
//               name="password"
//               className='reset-cp'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <br />
//           </div>
//           <button className='update-btn' onClick={handleResetPassword}> Update Password</button>
//         </div>
//       </div>
//     </>
//   );
// };
 
// export default ResetPass;
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ResetPass = () => {
  const { userId, resetToken } = useParams();
  const navigate = useNavigate();
  console.log("Reset token:", resetToken);
  const [password, setPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.put(`http://localhost:3003/auth/user/resetpassword/${resetToken}/${userId}`, { password });
      console.log("Password reset successful");
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 3000,
        style: {
          backgroundColor: "#003d89",
          color: "white",
        },
        onClose: () => {
          // Ensure navigation happens after the toast closes
          setTimeout(() => {
            navigate('/');
          }, 100); // Adding a slight delay before navigating to the login page
        }
      });
    } catch (error) {
      console.error('Failed to reset password:', error.response?.data?.error || error.message);
      toast.error('Failed to reset password', {
        position: "top-center",
        autoClose: 3000,
        style: {
          backgroundColor: "#003d89",
          color: "white"
        }
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='p-r-container'>
        <div className='reset-content'>
          <h2 className='reset-heading'>Reset Password</h2>
          <p className='reset-text'>Set your new password </p>
          <p className='reset-text'>to securely access your account.</p>
          <br />
          <div className='reset-form'>
            <label htmlFor="password" className='label-text'>New password</label><br />
            <input
              type="password"
              name="password"
              className='reset-cp'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>
          <button className='update-btn' onClick={handleResetPassword}> Update Password</button>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
