//ChatRoomName.js
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 
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