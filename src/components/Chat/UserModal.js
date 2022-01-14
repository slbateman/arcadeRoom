import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUsers, selectLocalUserInfo } from '../../state/usersSlice'

export const UserModal = ({ show, close, userID}) => {
  console.log(userID)
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
            <h4>{userID}</h4>
            <Link to='../user/profile'><h4>Profile</h4></Link>
            <Link to='../user/messages'><h4>Private Message</h4></Link>
          </div>
  
        </div>
      </div>
    )
  };