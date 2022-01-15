import React, { useState, useEffect, useRef } from 'react'
import './chat.css'
import { useSelector } from 'react-redux'
import { UserModal } from './UserModal'
import { selectUsers, selectLocalUserInfo } from '../../state/usersSlice'

// user/userSettings
// create a modal to send the user to either the users profile or a personal message room

function MessageList({ chatroom }) {
    const users = useSelector(selectUsers)
    const localUserInfo = useSelector(selectLocalUserInfo)
    const localUser = users.find((e) => e._id === localUserInfo.user_id)
    const messageElement = useRef(null)
    const [modalUser, setModalUser] = useState()

    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);

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
                
                <UserModal  show={show} close={closeModalHandler} modalUser={modalUser} localUser={localUser}/>
                
                {chatroom.messages.map((data, i) => {
                    const user = users.find((e) => e._id === data.user_id)
                    
                    
                    return (
                        !user ? <div></div> :
                            <div key={`message${i}`}>
                            <div className="message-user-info">
                                
                                <img 
                                    key={`modal${i}`}
                                    className="message-avatar user-button"
                                    onClick={(x) => {setShow(true); setModalUser(user)}}
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
 