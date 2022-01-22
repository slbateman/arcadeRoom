import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {editChatroom} from '../../state/chatroomSlice'
import { useNavigate } from 'react-router-dom';

export const EditModal = ({ chatroom, show, close }) => {
  const [name, setName] = useState(chatroom.name);
  const [description, setDescription] = useState(chatroom.description);
  const [color, setColor] = useState(chatroom.color);
  const [passcode, setPasscode] = useState(chatroom.passcode)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function submit(e) {
    e.preventDefault()
    const data = {
      _id: chatroom._id,
      name: name,
      description: description,
      color: color,
      passcode: passcode
    }
    console.log(data)
    dispatch(editChatroom(data))
    navigate(`/chat/${name}`)
  }

  function clear() {
    setDescription('')
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
          <form onSubmit={(e) => { submit(e); close(); }}>
            <h4>Name</h4>
          <h4>
              <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder='name'
            />
            </h4>
            <h4>Description</h4>
            <h4>
              <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder='Description'
            />
            </h4>
            <h4>Color</h4>
            <h4>
              <input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              type="color"
            />
            </h4>
            {chatroom.passcode === '' ? <h4>chat is Public</h4> : <h4>chat is Private</h4>}
            <h4>
              <input
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              type="text"
            />
            </h4>
            <div className="modal-footer">
              <button type="submit" className="btn-cancel">Submit</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
};
