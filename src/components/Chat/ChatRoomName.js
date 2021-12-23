import React from 'react'
import './chat.css'
import { name } from './RoomsList'

function ChatRoomName() {
    return (
        <div className='chat-room-name text-color-blue'>
            {name}
        </div>
    )
}


export default ChatRoomName