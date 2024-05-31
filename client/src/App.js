import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login'
import ResetRequest from './pages/ForgotPassword/ResetRequest';
import ResetPassword from './pages/ForgotPassword/ResetPassword';
import Error from './pages/Error';
import './assets/styles/style.css';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import ManagerDashboard from './pages/Dashboard/ManagerDashboard';
import TechleadDashboard from './pages/Dashboard/TechleadDashboard';
import EmployeeDashboard from './pages/Dashboard/EmployeeDashboard';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            {/* DASHBOARD*/}
            <Route path='/admin-dashboard/:userId' element={<AdminDashboard/>}/>
            <Route path='/manager-dashboard/:userId' element={<ManagerDashboard/>}/>
            <Route path='/techlead-dashboard/:userId' element={<TechleadDashboard/>}/>
            <Route path='/employee-dashboard/:userId' element={<EmployeeDashboard/>}/>
            <Route path='/resetrequest' element={<ResetRequest/>}/>
            <Route path="/resetpassword/:resetToken/:userId" element={<ResetPassword/>} />
            {/* ERROR */}
            <Route path="/404page" element={<Error/>} />
            <Route path="*" element={<Navigate to="/404page" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
