

import React, { useState } from 'react';
import '../styles/Popover3.css';

function Popover3() {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="popover-container">
      <button 
        className="user-profile-button" 
        onMouseEnter={() => setShowPopover(true)} 
        onMouseLeave={() => setShowPopover(false)}
      >
        User profile
      </button>

      {showPopover && (
        <div className="popover" id="popover-user-profile" role="tooltip">
          <div className="popover-content">
            <div className="popover-header">
              <a href="#">
                <img className="profile-picture" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos" />
              </a>
              <div>
                <button className="follow-button">Follow</button>
              </div>
            </div>
            <p className="user-name"><a href="#">Jese Leos</a></p>
            <p className="user-handle"><a href="#">@jeseleos</a></p>
            <p className="user-bio">Open-source contributor. Building <a href="#" className="user-link">flowbite.com</a>.</p>
            <ul className="user-stats">
              <li>
                <a href="#">
                  <span className="stat-number">799</span>
                  <span>Following</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="stat-number">3,758</span>
                  <span>Followers</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="popover-arrow"></div>
        </div>
      )}
    </div>
  );
}

export default Popover3;
