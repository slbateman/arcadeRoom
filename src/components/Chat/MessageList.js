import React from 'react'
import './chat.css'
import { useSelector, useDispatch} from 'react-redux'
import { selectChatroom, addChatroom } from '../../state/chatroomSlice'
import { roomName } from './RoomsList'
import { selectUsers } from '../../state/usersSlice'

function MessageList() {
    
    const chatrooms = useSelector(selectChatroom)
    const users = useSelector(selectUsers)

    return (
        <div className='message-list text-color'>
            <div>
                {chatrooms[0].messages.map((data) => (
                    <div>{users[data.userIndex].username + ": " + data.message}</div>
                    )
                )}
            </div>
        </div>
    )
}


export default MessageList