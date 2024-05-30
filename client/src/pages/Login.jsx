// import React, { useState } from 'react';
// import logo from '../assets/bluelogo.svg';
// import line from '../assets/line.png';
// import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     errors: {
//       username: '',
//       password: '',
//     }
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//       errors: {
//         ...formData.errors,
//         [name]: '',
//       }
//     });
//   };

//   const validateForm = () => {
//     let valid = true;
//     let errors = {};

//     if (formData.username.trim() === '') {
//       errors.username = 'Username is required';
//       valid = false;
//     }

//     if (formData.password.trim() === '') {
//       errors.password = 'Password is required';
//       valid = false;
//     }

//     setFormData({
//       ...formData,
//       errors
//     });

//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Proceed with form submission (e.g., send data to the server)
//       toast.success('Form submitted successfully!');
//     } else {
//       toast.error('Please fix the errors in the form.');
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className='bg'>
//         <img src={logo} alt='logo-img' width={400} className='logo' />
//         <img src={line} alt='divider' width={5} className='divider' />
//         <div className='form'>
//           <p className='login-header'>Login to your account.</p>
//           <p className='welcome-text'>Welcome back! Please enter your credentials.</p>
//           <form onSubmit={handleSubmit}>
//             <div className='form-group'>
//               <label htmlFor="username" className='label-one'>Username</label><br />
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//               />
//               {formData.errors.username && <p className='error'>{formData.errors.username}</p>}
//             </div>
//             <div className='form-group'>
//               <label htmlFor="password" className='label-two'>Password</label><br />
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               {formData.errors.password && <p className='error'>{formData.errors.password}</p>}
//             </div>
//             <Link to='/resetrequest' className='link-fgot'><p className='f-got'>Forgot Password?</p></Link>
//             <button type="submit" className='login-btn'>Login</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import logo from '../assets/bluelogo.svg';
// import line from '../assets/line.png';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     errors: { username: '', password: '' }
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//       errors: {
//         ...formData.errors,
//         [name]: ''
//       }
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     // Validation
//     let isValid = true;
//     const errors = {};

//     if (!formData.username.trim()) {
//       errors.username = '* Username is required';
//       isValid = false;
//     }

//     if (!formData.password.trim()) {
//       errors.password = '* Password is required';
//       isValid = false;
//     }

//     if (isValid) {
//       try {
//         const response = await axios.post('http://localhost:3003/auth/user/login', {
//           username: formData.username,
//           password: formData.password
//         });

//         // Handle successful login
//         console.log('Login successful, token:', response.data.token);
//         navigate('/dashboard');
//       } catch (error) {
//         // Handle login error
//         if (error.response && error.response.status === 400) {
//           toast.error('Invalid username or password', {
//             position: "top-center",
//             autoClose: 1000,
//             style: { backgroundColor: "#003d89", color: "white" }
//           });
//         } else {
//           console.error('Login failed:', error.response ? error.response.data.error : error.message);
//         }
//       }
//     } else {
//       // Update state with errors
//       setFormData({
//         ...formData,
//         errors: {
//           ...formData.errors,
//           ...errors
//         }
//       });
//     }
//   };


//   return (
//   <>
//   <ToastContainer/>
//     <div className='bg'>
      
//       <img src={logo} alt='logo-img' width={400} className='logo' />
//       <img src={line} alt='divider' width={5} className='divider' />
//       <div className='form'>
//         <p className='login-header'>Login to your account.</p>
//         <p className='welcome-text'>Welcome back! Please enter your credentials.</p>
//         <form onSubmit={handleSubmit}>
//           <div className='form-group'>
//             <label htmlFor="username" className='label-one'>Username</label><br />
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               />
//             {formData.errors.username && <p className='error'>{formData.errors.username}</p>}
//           </div>
//           <div className='form-group'>
//             <label htmlFor="password" className='label-two'>Password</label><br />
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               />
//             {formData.errors.password && <p className='error'>{formData.errors.password}</p>}
//           </div>
//           <Link to='/resetrequest' className='link-fgot'><p className='f-got'>Forgot Password?</p></Link>
//           <button type="submit" className='login-btn'>Login</button>
//         </form>
//       </div>
//     </div>
//   </>
    
//   );
// };

// export default Login;



// ......................
// import React, { useState } from 'react';
// import logo from '../assets/bluelogo.svg';
// import line from '../assets/line.png';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     errors: { username: '', password: '' }
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//       errors: {
//         ...formData.errors,
//         [name]: ''
//       }
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     // Validation
//     let isValid = true;
//     const errors = {};

//     if (!formData.username.trim()) {
//       errors.username = '* Username is required';
//       isValid = false;
//     }

//     if (!formData.password.trim()) {
//       errors.password = '* Password is required';
//       isValid = false;
//     }

//     if (isValid) {
//       try {
//         const response = await axios.post('http://localhost:3003/auth/user/login', {
//           username: formData.username,
//           password: formData.password
//         });

//         // Handle successful login
//         const { token, user } = response.data;
//         console.log('Login successful, token:', token);

//         if (user && user.id) {
//           // Navigate to the dashboard with userId from the response
//           navigate(`/dashboard/${user.id}`);
//         } else {
//           throw new Error("User information is missing in the response");
//         }
//       } catch (error) {
//         // Handle login error
//         if (error.response && error.response.status === 400) {
//           toast.error('Invalid username or password', {
//             position: "top-center",
//             autoClose: 1000,
//             style: { backgroundColor: "#003d89", color: "white" }
//           });
//         } else {
//           console.error('Login failed:', error.response ? error.response.data.error : error.message);
//         }
//       }
//     } else {
//       // Update state with errors
//       setFormData({
//         ...formData,
//         errors: {
//           ...formData.errors,
//           ...errors
//         }
//       });
//     }
//   };

//   return (
//     <>
//       <ToastContainer/>
//       <div className='bg'>
//         <img src={logo} alt='logo-img' width={400} className='logo' />
//         <img src={line} alt='divider' width={5} className='divider' />
//         <div className='form'>
//           <p className='login-header'>Login to your account.</p>
//           <p className='welcome-text'>Welcome back! Please enter your credentials.</p>
//           <form onSubmit={handleSubmit}>
//             <div className='form-group'>
//               <label htmlFor="username" className='label-one'>Username</label><br />
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//               />
//               {formData.errors.username && <p className='error'>{formData.errors.username}</p>}
//             </div>
//             <div className='form-group'>
//               <label htmlFor="password" className='label-two'>Password</label><br />
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
              
//               />
//               {formData.errors.password && <p className='error'>{formData.errors.password}</p>}
//             </div>
//             <Link to='/resetrequest' className='link-fgot'><p className='f-got'>Forgot Password?</p></Link>
//             <button type="submit" className='login-btn'>Login</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import logo from '../assets/bluelogo.svg';
// import line from '../assets/line.png';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     errors: { username: '', password: '' }
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//       errors: {
//         ...formData.errors,
//         [name]: ''
//       }
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     // Validation
//     let isValid = true;
//     const errors = {};

//     if (!formData.username.trim()) {
//       errors.username = '* Username is required';
//       isValid = false;
//     }

//     if (!formData.password.trim()) {
//       errors.password = '* Password is required';
//       isValid = false;
//     }

//     if (isValid) {
//       try {
//         const response = await axios.post('http://localhost:3003/auth/user/login', {
//           username: formData.username,
//           password: formData.password
//         });

//         // Handle successful login
//         console.log('Full response:', response);
//         const { token, user } = response.data;
//         console.log('Login successful, token:', token);
//         console.log('User object:', user);

//         if (user && user.id) {
//           // Navigate to the dashboard with userId from the response
//           navigate(`/dashboard/${user.id}`);
//         } else {
//           throw new Error("User information is missing in the response");
//         }
//       } catch (error) {
//         // Handle login error
//         if (error.response && error.response.status === 400) {
//           toast.error('Invalid username or password', {
//             position: "top-center",
//             autoClose: 1000,
//             style: { backgroundColor: "#003d89", color: "white" }
//           });
//         } else {
//           console.error('Login failed:', error.response ? error.response.data.error : error.message);
//         }
//       }
//     } else {
//       // Update state with errors
//       setFormData({
//         ...formData,
//         errors: {
//           ...formData.errors,
//           ...errors
//         }
//       });
//     }
//   };

//   return (
//     <>
//       <ToastContainer/>
//       <div className='bg'>
//         <img src={logo} alt='logo-img' width={400} className='logo' />
//         <img src={line} alt='divider' width={5} className='divider' />
//         <div className='form'>
//           <p className='login-header'>Login to your account.</p>
//           <p className='welcome-text'>Welcome back! Please enter your credentials.</p>
//           <form onSubmit={handleSubmit}>
//             <div className='form-group'>
//               <label htmlFor="username" className='label-one'>Username</label><br />
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//               />
//               {formData.errors.username && <p className='error'>{formData.errors.username}</p>}
//             </div>
//             <div className='form-group'>
//               <label htmlFor="password" className='label-two'>Password</label><br />
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               {formData.errors.password && <p className='error'>{formData.errors.password}</p>}
//             </div>
//             <Link to='/resetrequest' className='link-fgot'><p className='f-got'>Forgot Password?</p></Link>
//             <button type="submit" className='login-btn'>Login</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
// .........................
import React, { useState } from 'react';
import logo from '../assets/bluelogo.svg';
import line from '../assets/line.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const decodeJWT = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );
  return JSON.parse(jsonPayload);
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    errors: { username: '', password: '' }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      errors: {
        ...formData.errors,
        [name]: ''
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validation
    let isValid = true;
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = '* Username is required';
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = '* Password is required';
      isValid = false;
    }

    if (isValid) {
      try {
        const response = await axios.post('http://localhost:3003/auth/user/login', {
          username: formData.username,
          password: formData.password
        });

        // Handle successful login
        console.log('Full response:', response);
        const { token } = response.data;
        console.log('Login successful, token:', token);

        const decodedToken = decodeJWT(token);
        console.log('Decoded Token:', decodedToken);

        const { user } = decodedToken;
        console.log('User object:', user);

        if (user && user.id) {
          // Navigate to the dashboard with userId from the response
          navigate(`/dashboard/${user.id}`);
        } else {
          throw new Error("User information is missing in the response");
        }
      } catch (error) {
        // Handle login error
        if (error.response && error.response.status === 400) {
          toast.error('Invalid username or password', {
            position: "top-center",
            autoClose: 1000,
            style: { backgroundColor: "#003d89", color: "white" }
          });
        } else {
          console.error('Login failed:', error.response ? error.response.data.error : error.message);
        }
      }
    } else {
      // Update state with errors
      setFormData({
        ...formData,
        errors: {
          ...formData.errors,
          ...errors
        }
      });
    }
  };

  return (
    <>
      <ToastContainer/>
      <div className='bg'>
        <img src={logo} alt='logo-img' width={400} className='logo' />
        <img src={line} alt='divider' width={5} className='divider' />
        <div className='form'>
          <p className='login-header'>Login to your account.</p>
          <p className='welcome-text'>Welcome back! Please enter your credentials.</p>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor="username" className='label-one'>Username</label><br />
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {formData.errors.username && <p className='error'>{formData.errors.username}</p>}
            </div>
            <div className='form-group'>
              <label htmlFor="password" className='label-two'>Password</label><br />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {formData.errors.password && <p className='error'>{formData.errors.password}</p>}
            </div>
            <Link to='/resetrequest' className='link-fgot'><p className='f-got'>Forgot Password?</p></Link>
            <button type="submit" className='login-btn'>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
