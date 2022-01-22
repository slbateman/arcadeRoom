//ChatRoomName.js
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import './chat.css'
import { roomName } from './RoomsList'
import { Modal } from './Modal'
import { Button } from 'bootstrap'
import { selectUsers, selectLocalUserInfo } from '../../state/usersSlice'
import edit from '../../images/edit.png'
import removeImg from '../../images/remove.png'
import chatRemove from '../../images/chatRemove.png'
import { RemoveChatroomModal } from './RemoveChatroomModal'
import { EditModal } from './EditModal'

function ChatRoomName({chatroom, setRemove, remove}) {
    const users = useSelector(selectUsers)
    const localUserInfo = useSelector(selectLocalUserInfo)
    const localUser = users.find((e) => e._id === localUserInfo.user_id)

    const submit = (data) => {

        closeModalHandler1()
        closeModalHandler2()
    }

    const [show1, setShow1] = useState(false);
    const closeModalHandler1 = () => setShow1(false);
    const [show2, setShow2] = useState(false);
    const closeModalHandler2 = () => setShow2(false);
    
    return (
        !chatroom || !localUser ? <div></div> :
        
        <div className={'chat-room-name'} style={{color: chatroom.color}} >
             {chatroom.owner !== localUser._id ? (<div>{chatroom.name}</div>) : (
             <div>
                {chatroom.name}
                &nbsp;
                <img 
                className="imgSize" 
                onClick={(x) => setShow1(true)}
                src={edit}
                /> 
                &nbsp;
                <img 
                className="imgSize" 
                onClick={ !remove ? (x) =>{setRemove(true)} : (x) =>{setRemove(false)}}
                src={removeImg}
                />
                &nbsp;
                {!remove ? <div></div> : 
                    <img 
                        className= "imgSize" 
                        onClick={(x) => setShow2(true)}
                        src={chatRemove}
                        />  
                }
                <EditModal chatroom={chatroom} show={show1} close={closeModalHandler1} submit={submit}/>
                <RemoveChatroomModal chatroom={chatroom} show={show2} close={closeModalHandler2} submit={submit} setRemove={setRemove}/>
            </div>
             )}
        </div>
    )
}


export default ChatRoomName