import React, {useState} from 'react';
import './Modal.css';

export const Modal = ({ show, close, submit}) => {
  const [data, setData] = useState(null);

  function getName(e) {
    setData(e.target.value)
    console.log(data)
  }

  const newRoomName = data

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
          <h4>New chat</h4>
          <form>
            <input
              onChange={getName}
              type="text"
              placeholder='Room Name'
            />
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={() => {submit(data); close();}} className="btn-cancel">submit</button>
        </div>
      </div>
    </div>
  )
};
