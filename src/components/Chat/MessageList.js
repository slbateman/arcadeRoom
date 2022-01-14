import React, { useEffect, useRef } from 'react'
import './chat.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectChatroom, addChatroom } from '../../state/chatroomSlice'
import { roomName } from './RoomsList'
import { selectUsers, selectLocalUserInfo } from '../../state/usersSlice'

// user/userSettings

function MessageList({ chatroom }) {

    const chatrooms = useSelector(selectChatroom)
    const users = useSelector(selectUsers)
    const localUserInfo = useSelector(selectLocalUserInfo)
    const localUser = users.find((e) => e._id === localUserInfo.user_id)
    const messageElement = useRef(null)
    const obj = document.getElementById("messageBox");
    

    useEffect(() => {
        if(chatroom) {
            const objDiv = document.getElementById("messageBox");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
        
    }, [chatroom])

    return (
        !chatroom ? <div></div> :
        <div className='message-list' ref = {messageElement} id='messageBox' >
            <div>
                
                {chatroom.messages.map((data, i) => {
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
    )
}


export default MessageList