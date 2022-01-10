import React from 'react'
import './chat.css'
import { useSelector, useDispatch} from 'react-redux'
import { selectChatroom, addChatroom } from '../../state/chatroomSlice'
import { roomName } from './RoomsList'
import { selectUsers, selectLocalUserInfo } from '../../state/usersSlice'

function MessageList() {
    
    const chatrooms = useSelector(selectChatroom)
    const users = useSelector(selectUsers)
    // const localUserInfo = useSelector(selectLocalUserInfo)
    // const user = users.find((e) => e._id === localUserInfo.user_id)

    return (
        !users ? <div></div> : 
        <div className='message-list text-color'>
            <div>
                {chatrooms[0].messages.map((data) => {
                    const user = users.find((e) => e._id === data.user_id)
                    return (
                    <div>{user.username + ": " + data.message}</div>
                    )
                }
                )}
            </div>
        </div>
    )
}


export default MessageList