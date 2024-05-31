import React, { useState } from 'react';
import logo from '../../assets/whitelogo.png';
import project from '../../assets/project.png';
import store from '../../assets/store.png';
import timesheet from '../../assets/timesheet.png';
import report from '../../assets/report.png';
import logoutlogo from '../../assets/logout.png';


const EmployeeDashboard = () => {
  
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
  const [isTimesheetDropdownOpen, setIsTimesheetDropdownOpen] = useState(false);
  const [isReportDropdownOpen, setIsReportDropdownOpen] = useState(false);

  return (
    <>
    {/* admin */}
    <div className='dashboard-container'>
      {/* left side */}
      <div className='left-container'>
        <img src={logo} width={110} className='w-logo' alt='logo' />
        <div className='dashboard-list'>
          
          {/* Project dropdown */}
          <button className='d-l-contents' onClick={() => setIsProjectDropdownOpen(!isProjectDropdownOpen)}>
            <img src={project} width={21} alt='project' />
            <p className='d-l-text'>Project</p>
            <i className={`fa-solid fa-chevron-down ${isProjectDropdownOpen ? 'open' : ''}`}></i>
          </button>
          {isProjectDropdownOpen && (
            <div className='dropdown-content'>
              <button className='drp-btn'>Work Order Maintenance</button>
              <button className='drp-btn'>Project Maintenance</button>
              <button className='drp-btn'>Project Budget List</button>
              <button className='drp-btn'>Project Budget Maintenance</button>
              <button className='drp-btn'>Budget Revision Maintenance</button>
              <button className='drp-btn'>Project Detail</button>
              <button className='drp-btn'>Work Order List</button>
              <button className='drp-btn'>Project Timesheet Summary</button>
              <button className='drp-btn'>Project Hours by PG</button>
            </div>
          )}
          
          {/* Store dropdown */}
          <button className='d-l-contents' onClick={() => setIsStoreDropdownOpen(!isStoreDropdownOpen)}>
            <img src={store} width={21} alt='store' />
            <p className='d-l-text'>Store</p>
            <i className={`fa-solid fa-chevron-down ${isStoreDropdownOpen ? 'open' : ''}`}></i>
          </button>
          {isStoreDropdownOpen && (
            <div className='dropdown-content'>
              <button className='drp-btn'>Inventory Maintenance</button>
            </div>
          )}

          {/* Timesheet dropdown */}
          <button className='d-l-contents' onClick={() => setIsTimesheetDropdownOpen(!isTimesheetDropdownOpen)}>
            <img src={timesheet} width={21} alt='timesheet' />
            <p className='d-l-text'>Timesheet</p>
            <i className={`fa-solid fa-chevron-down ${isTimesheetDropdownOpen ? 'open' : ''}`}></i>
          </button>
          {isTimesheetDropdownOpen && (
            <div className='dropdown-content'>
              <button className='drp-btn'>Employee Timesheet</button>
            </div>
          )}

          {/* Report dropdown */}
          <button className='d-l-contents' onClick={() => setIsReportDropdownOpen(!isReportDropdownOpen)}>
            <img src={report} width={21} alt='report' />
            <p className='d-l-text'>Reports</p>
            <i className={`fa-solid fa-chevron-down ${isReportDropdownOpen ? 'open' : ''}`}></i>
          </button>
          {isReportDropdownOpen && (
            <div className='dropdown-content'>
              <button
                className='drp-btn'>Purchase Order</button>
                </div>
              )}
    
              {/* Logout button */}
              <button className='d-l-contents logout' 
              >
                <img src={logoutlogo} width={21} alt='logout' 
                // `onClick={handleLogout}`
                />
                <p className='d-l-text'>Log out</p>
              </button>
            </div>
          </div>
          {/* right side */}
          <div className='right-container'>
          </div>
    </div>

    {/* manager */}
    
    </>
      );
    };
export default EmployeeDashboard;
    