import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login'
import ResetRequest from './pages/ForgotPassword/ResetRequest';
import ResetPassword from './pages/ForgotPassword/ResetPassword';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import './assets/styles/style.css'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/dashboard/:userId' element={<Dashboard/>}/>
            <Route path='/resetrequest' element={<ResetRequest/>}/>
            <Route path="/resetpassword/:resetToken/:userId" element={<ResetPassword/>} />
            {/* Error */}
            <Route path="/404page" element={<Error/>} />
            <Route path="*" element={<Navigate to="/404page" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
