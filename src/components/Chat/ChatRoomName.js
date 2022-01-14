//ChatRoomName.js
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 
import React from 'react'
import './chat.css'
import { roomName } from './RoomsList'
import { Modal } from './Modal'

function ChatRoomName({chatroom}) {
    return (
        <div className='chat-room-name text-color-blue'>
            {chatroom.name}
        </div>
    )
}


export default ChatRoomName