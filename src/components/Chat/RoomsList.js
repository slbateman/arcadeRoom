import React from 'react'
import './chat.css'
import { Form, InputGroup, FormControl, Button } from "react-bootstrap"

let name = "Mario Bros"

function RoomsList() {
    return (
        <div className='rooms-list '>
            <div className='space'>
                <Button variant="green" type="submit">
                    + NEW ROOM
                </Button>
                <div className='space text-color big-text'>
                    Active Chatrooms
                </div>
                <div className=' text-color-pink'>
                    {name}
                </div>
                <div className='space text-color-purple big-text'>
                    Inactive Chatrooms
                </div>
            </div>
            
        </div>
    )
}


export default RoomsList
export {name}