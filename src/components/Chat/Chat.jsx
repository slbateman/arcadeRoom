//Chat.jsx
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 

import React, { useEffect } from 'react';
import './chat.css'
import InformationList from './InformationList';
import RoomsList from './RoomsList';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import ChatRoomName from './ChatRoomName';
import { useSelector} from 'react-redux'
import { selectChatroom} from '../../state/chatroomSlice'
import { useLocation } from 'react-router-dom';
import './Modal.css'


function Chat() {
    const chatrooms = useSelector(selectChatroom);
    const location = useLocation()
    const currentUrl = location.pathname
    const chatroomName = currentUrl.substr(6,20)
    const chatroom = !chatrooms ? null : chatrooms.find((e) => e.name === chatroomName)
    

    return (
        !chatrooms ? <div></div> :
        <div className="chat">
            <MessageList chatroom = {chatroom} />
            <RoomsList chatroom = {chatroom}/>
            <ChatRoomName chatroom = {chatroom}/>
            
            <InformationList />
            {/* <Message/> */}
            <SendMessageForm chatroom = {chatroom}/>
        </div>
    )
}

export default Chat
