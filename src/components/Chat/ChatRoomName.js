import React from 'react'
import './chat.css'
import { roomName } from './RoomsList'


function ChatRoomName() {
    return (
        <div className='chat-room-name text-color-blue'>
            {roomName}
        </div>
    )
}


export default ChatRoomName