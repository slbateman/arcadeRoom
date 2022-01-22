import React, { useState } from 'react';

export const Modal = ({ show, close, submit }) => {
  const [data, setData] = useState('');

  function clear() {
    setData('')
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
        <span onClick={(x) => {clear(); close()}} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>New chat</h4>
          <form onSubmit={() => { submit(data); close(); }}>
            <input
              onChange={(e) => setData(e.target.value)}
              type="text"
              placeholder='Room Name'
            />
            <div className="modal-footer">
              <button type="submit" className="btn-cancel">submit</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
};
