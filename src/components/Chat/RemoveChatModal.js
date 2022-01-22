import React from 'react';


export const RemoveChatModal = ({chatroom, show, close, submit }) => {


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
          <h4>Delete Chat?</h4>
            <div className="modal-footer">
            <button className="btn-cancel" onClick={close}>Cancel</button>
              <button type="submit" className="btn-cancel">Confirm</button>
            </div>
          
        </div>

      </div>
    </div>
  )
};
