import React from 'react';
import { useDispatch} from 'react-redux'
import { deleteChatroom } from '../../actions/chatroomActions';
import { useNavigate } from 'react-router-dom';


export const RemoveChatroomModal = ({chatroom, show, close, submit, setRemove }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          <h4>Delete Chatroom?</h4>
          <div>{chatroom.name}</div>
            <div className="modal-footer">
            <button className="btn-cancel" onClick={close}>Cancel</button>
              <button type="submit" className="btn-cancel" onClick={(e) => {dispatch(deleteChatroom(chatroom._id)); setRemove(false); navigate('/chat/general')}}>Confirm</button>
            </div>
          
        </div>

      </div>
    </div>
  )
};
