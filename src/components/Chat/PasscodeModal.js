import React, { useState } from 'react';
import { addUserAccess } from '../../state/chatroomSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocalUserInfo } from '../../state/usersSlice';

export const PasscodeModal = ({ chatroom, show, close }) => {
  const dispatch = useDispatch()
  const localUserInfo = useSelector(selectLocalUserInfo)
  const [passcode, setPasscode] = useState('');

  function clear() {
    setPasscode('')
  }

  const submit = (e, passcode) => {
    e.preventDefault()
    passcode !== chatroom.passcode ? (close())  : (
    dispatch(addUserAccess({_id: chatroom._id, access: [...chatroom.access, localUserInfo.user_id]}))
    )

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
          <h4>Passcode</h4>
          <form onSubmit={(e) => { submit(e, passcode); close(); }}>
            <input
              onChange={(e) => setPasscode(e.target.value)}
              type="text"
              placeholder='passcode'
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
