import React, { useState } from 'react';
import './chat.css'
import './Modal.css'
import { Button } from "react-bootstrap"
import { Modal } from './Modal';
import { useSelector, useDispatch} from 'react-redux'
import { selectChatroom } from '../../state/chatroomSlice'
import { selectLocalUserInfo } from '../../state/usersSlice'
import { Link } from 'react-router-dom'
import { postChatroom } from '../../actions/chatroomActions';



function RoomsList({chatroom}) {
    const dispatch = useDispatch();
    const chatrooms = useSelector(selectChatroom)
    const localUserInfo = useSelector(selectLocalUserInfo)
    const submit = (data) => {
        const newRoom = {
            name: data,
            messages: [],
            owner: localUserInfo.user_id
        }
        dispatch(postChatroom(newRoom))
    }
    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);

    return (
        !chatrooms ? <div></div> :
        <div className='rooms-list '>
            <div className='space'>
                <div className='back-drop'>
            { show ? <div onClick={closeModalHandler} 
            className="back-drop"></div> : null }
            <Button style={localUserInfo.loggedIn ? {display: 'block'} : {display: 'none'}} variant="green" onClick={(x) => setShow(true)} 
        
            
        
            >
              + NEW ROOM
            </Button>
          <Modal show={show} close={closeModalHandler} submit={submit}/>
                </div>



                <div className='space text-color big-text'>
                    Active Chatrooms
                </div>
                <div className=' text-color-pink'>
                    
                        {chatrooms.map((room, i) => (
                        <Link key={`room${i}`} to={`/chat/${room.name}`}>
                        <div>{room.name}</div>
                        </Link>
                        )
                        )}
                    
                </div>
                <div className='space text-color-purple big-text'>
                    Inactive Chatrooms
                </div>
            </div>
            
        </div>
    )
}


export default RoomsList