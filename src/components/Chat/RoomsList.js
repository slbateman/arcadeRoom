import React, { useState } from 'react';
import './chat.css'
import './Modal.css'
import { Button } from "react-bootstrap"
import { Modal } from './Modal';
import { useSelector, useDispatch} from 'react-redux'
import  { selectChatroom} from '../../state/chatroomSlice'
import { selectLocalUserInfo } from '../../state/usersSlice'
import { Link, useNavigate } from 'react-router-dom'
import { postChatroom } from '../../actions/chatroomActions';
import lock from '../../images/lock.png'
import { PasscodeModal } from './PasscodeModal'


function RoomsList({setRemove, remove, chatroom}) {
    const dispatch = useDispatch();
    const chatrooms = useSelector(selectChatroom)
    const localUserInfo = useSelector(selectLocalUserInfo)
    const navigate = useNavigate();
    const submit = (data) => {
        const newRoom = {
            name: data,
            messages: [],
            owner: localUserInfo.user_id
        }
        dispatch(postChatroom(newRoom))
        navigate(`/chat/${newRoom.name}`)
    }
    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);
    const [show2, setShow2] = useState(false);
    const closeModalHandler2 = () => setShow2(false);

    return (
        !chatrooms ? <div></div> :
        <div className='rooms-list '>
            <div className='space'>
                <div className='back-drop'>
            { show ? <div onClick={closeModalHandler} 
            className="back-drop"></div> : null }
            <Button style={localUserInfo.loggedIn ? {display: 'block'} : {display: 'none'}} variant="green" onClick={() => setShow(true)} 
        
            
        
            >
              + NEW ROOM
            </Button>
          <Modal show={show} close={closeModalHandler} submit={submit}/>
          <PasscodeModal chatroom={chatroom} show={show2} close={closeModalHandler2} submit={submit}/>
                </div>



                <div className='space text-color big-text'>
                    CHATROOMS
                </div>
                <div className=' text-color-pink'>
                    
                        {chatrooms.map((room) => (
                        <Link style={{color: 'white', textDecoration: 'none'} } to={`/chat/${room.name}`}>
                        <div onClick={() => {setRemove(false); !room.access.includes(localUserInfo.user_id) ? (room.passcode === '' ? setShow2(false) : setShow2(true)) : setShow2(false) }}>{room.name} 
                        {room.passcode === '' ? <div></div> :
                        <img className="imgSize2" src={lock} alt=''/>
                        } 
                        </div>
                        </Link>
                        )
                        )}
                </div>
            </div>
            
        </div>
    )
}


export default RoomsList