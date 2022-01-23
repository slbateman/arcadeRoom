import React, { useState } from "react";
import "./chat.css";
import { useSelector, useDispatch } from "react-redux";
import { addMessages } from "../../state/chatroomSlice";
import { roomName } from "./RoomsList";
//import { selectLocalUserInfo } from "../../state/usersSlice";
import socket from "../../socket/socket";
import { updateChatroom } from "../../api/chatroomAPI";

import {selectUsers, selectLocalUserInfo, editUserMsgTotal} from "../../state/usersSlice";


function SendMessageForm({ chatroom }) {
  const dispatch = useDispatch();


  const users = useSelector(selectUsers);
  const localUserInfo = useSelector(selectLocalUserInfo);
  const user = users.find((e) => e._id === localUserInfo.user_id);
  console.log(user); 
 // console.log(user.msgTotal)
  const [msgTotal, setMsgTotal] = useState();
  
  const updateMsgTotal = () => {
      dispatch(
        editUserMsgTotal({
          _id: localUserInfo.user_id,
          msgTotal: msgTotal,
        })
      );
    };
//const name = user.name; 
//console.log(name)
  
  const submit = (e) => {
    e.preventDefault();
    
    const messageSubmitData = {
      _id: chatroom._id,
      messages: [
        ...chatroom.messages,
        { user_id: localUserInfo.user_id, message: messageData },
      ],
    };
    
    dispatch(addMessages(messageSubmitData));
    updateChatroom(messageSubmitData._id, {messages: messageSubmitData.messages})
    socket.emit("sendChatroomMessage", messageSubmitData)
    setMessageData("");
     //e.target.value
    let count = user.msgTotal;
       
   // console.log(e.target.value)
   //console.log(count)
     setMsgTotal(e.target.value);
     updateMsgTotal(); 
     count += 1; 
  };

  //const localUserInfo = useSelector(selectLocalUserInfo);

  // const submit = (e) => {
  //     e.preventDefault()
  //     addMessage(messageData)

  // }

  const [] = useState(null);
  const [messageData, setMessageData] = useState("");

  // function getMessage(e) {
  //     setMessageData({...messageData, [e.target.name]: e.target.value})
  //     console.log(messageData)
  // }

  return (
    <div className="send-message-form">
      <form onSubmit={submit}>
        <input
          name="message"
          onChange={(e) => {
            setMessageData(e.target.value)
            // setMsgTotal(e.target.value);
            // updateMsgTotal(); 
          }}
          className="message"
          id="inputID"
          placeholder="Message"
          type="text"
          color="white"
          value={messageData}
        />
      </form>
    </div>
  );
}

export default SendMessageForm;
