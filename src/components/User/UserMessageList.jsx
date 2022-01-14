import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { selectChatroom, addChatroom } from '../../state/chatroomSlice'
import { selectUsers, selectLocalUserInfo } from '../../state/usersSlice'


const UserMessageList = () => {
  const [messageData, setMessageData] = useState("");
  const submit = () => {};
  
  const PM = useSelector(selectChatroom)
  const users = useSelector(selectUsers)
  const localUserInfo = useSelector(selectLocalUserInfo)
  const localUser = users.find((e) => e._id === localUserInfo.user_id)
  const messageElement = useRef(null)
  const obj = document.getElementById("messageBox");
 
  useEffect(() => {
    if(PM) {
        const objDiv = document.getElementById("messageBox");
        objDiv.scrollTop = objDiv.scrollHeight;
    }
    
}, [PM])

  return (
    <div className="pm-area">
      <div className="pm-messages">
      !PM ? <div></div> :
        <div className='message-list' ref = {messageElement} id='messageBox' >
            <div>
                
                {PM.messages.map((data, i) => {
                    const user = users.find((e) => e._id === data.user_id)

                    return (
                        !user ? <div></div> :
                            <div key={`message${i}`}>
                            <div className="message-user-info">
                                <img
                                    className="message-avatar"
                                    src={user.avatar}
                                    alt=""
                                    style={{ border: `2px solid ${user.color}` }}
                                />
                                <div className="message-block">
                                    <h5>{user.username}</h5>
                                    <div
                                        className="message-text"
                                        style={{
                                            border: `2px solid ${user.color}`,
                                            color: `${localUser.msgBrightness}`,
                                            fontSize: `${localUser.msgDensity}px`,
                                        }}
                                    >
                                        {data.message}
                                    </div>
                                </div>
                                
                            </div>
                            <br /><br />
                        </div>
                        
                    )
                    
                }
                )}
                
            </div>
        </div> 
      </div>
      <form onSubmit={submit} className="pm-message-input">
        <input
          name="message"
          onChange={(e) => setMessageData(e.target.value)}
          className="message"
          id="inputID"
          placeholder="Message"
          type="text"
          color="white"
          value={messageData}
        />
      </form>
    </div>
  );
};

export default UserMessageList;
