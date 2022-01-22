//Chat.jsx
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 

import React, { useState } from 'react';
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
    const location = useLocation();
    const currentUrl = location.pathname;
    const chatroomString = currentUrl.substr(6,60);
    const chatroomName = chatroomString.replace(/%20/g,' ')
    const chatroom = !chatrooms ? null : chatrooms.find((e) => e.name === chatroomName);
    const [remove, setRemove] = useState(false);

    return (
        
        !chatrooms ? (<div></div>) : (
        <div className="chat">

            <MessageList chatroom = {chatroom} remove = {remove}/>
            <RoomsList chatroom = {chatroom} setRemove = {setRemove} remove = {remove}/>
            <ChatRoomName chatroom = {chatroom} setRemove = {setRemove} remove = {remove}/>
            
            <InformationList />
            {/* <Message/> */}
            <SendMessageForm chatroom = {chatroom}/>
        </div>
        )  
    )
}

export default Chat
