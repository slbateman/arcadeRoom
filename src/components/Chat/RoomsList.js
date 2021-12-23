import React, { useState } from 'react';
import './chat.css'
import './Modal.css'
import { Form, InputGroup, FormControl, Button } from "react-bootstrap"
import { Modal } from './Modal';
import { useSelector, useDispatch} from 'react-redux'
import { selectChatroom, addChatroom } from '../../state/chatroomSlice'


let roomName = "Mario Bros"

function RoomsList() {
    const dispatch = useDispatch();
    const chatrooms = useSelector(selectChatroom)
    const submit = (data) => {
        const newRoom = {
            name: data,
            messages: []
        }
        dispatch(addChatroom(newRoom))
    }
    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);

    return (
        
        <div className='rooms-list '>
            <div className='space'>
                <div className='back-drop'>
            { show ? <div onClick={closeModalHandler} 
            className="back-drop"></div> : null }

            <Button variant="green" onClick={(x) => setShow(true)} 
        
            
        
            >
              + NEW ROOM
            </Button>
          <Modal show={show} close={closeModalHandler} submit={submit}/>
                </div>



                <div className='space text-color big-text'>
                    Active Chatrooms
                </div>
                <div className=' text-color-pink'>
                    {chatrooms.map((room) => (
                        <div>{room.name}</div>
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
export {roomName}