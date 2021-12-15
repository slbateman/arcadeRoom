//Chat.jsx
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 

import React from 'react';
import './chat.css'
import InformationList from './InformationList';
import RoomsList from './RoomsList'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import ChatRoomName from './ChatRoomName';


function Chat() {
    return (
        <div className="chat">
            <RoomsList />
            <ChatRoomName />
            <MessageList />
            <InformationList />
            <SendMessageForm />
        </div>
    )
}

export default Chat
