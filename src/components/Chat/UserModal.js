import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const UserModal = ({ show, close}) => {
    const [user, setUser] = useState(null)
  
    function getName(e) {
      setUser(e.target.value)
      console.log(user)
    }
  
    return (
      <div className="modal-wrapper"
        style={{
          transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}
      >
        <div className="modal-header">
          <p></p>
          <span onClick={close} className="close-modal-btn">x</span>
        </div>
        <div className="modal-content">
          <div className="modal-body">
            <h4>user's name</h4>
            <Link to=''><h4>Profile</h4></Link>
            <Link to=''><h4>Private Message</h4></Link>
          </div>
  
        </div>
      </div>
    )
  };