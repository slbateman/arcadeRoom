//ChatRoomName.js
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 
import React from 'react'
import './chat.css'
import { roomName } from './RoomsList'
import { Modal } from './Modal'

function ChatRoomName() {
    return (
        <div className='chat-room-name text-color-blue'>
            {roomName}
        </div>
    )
}


export default ChatRoomName