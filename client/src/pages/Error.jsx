import React from 'react';
import brokenClock from '../assets/clockill.png';
const Error = () => {
  return (
    <div className="error-404">
      <div className="content">
        <div className="error-code">404</div>
        <div className="message">Page Not Found</div>
        <div className="animations">
          <img src={brokenClock} alt="Broken Clock" className="broken-clock" />
        </div>
      </div>
    </div>
  );
};

export default Error;
