import React, { useEffect } from 'react'
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
    useEffect(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight, 
            behavior: "auto"
        })
    }, [chatrooms])

    return (
        <div className='message-list'>
            <div>
                {chatroom.messages.map((data) => {
                    const user = users.find((e) => e._id === data.user_id)

                    return (
                        !user ? <div></div> :
                            <div>
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