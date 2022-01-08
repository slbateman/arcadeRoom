import React, {useState} from 'react'
import './chat.css'
import { useSelector, useDispatch} from 'react-redux'
import { addMessages } from '../../state/chatroomSlice'
import { roomName } from './RoomsList'
import { selectLocalUserInfo } from '../../state/usersSlice'

function SendMessageForm() {

    const dispatch = useDispatch();
    const submit = (e) => {
        e.preventDefault()
        dispatch(addMessages({userIndex: localUserInfo.userIndex, message: messageData}))
        setMessageData('')
    }
    
    const localUserInfo = useSelector(selectLocalUserInfo)

    // const submit = (e) => {
    //     e.preventDefault()
    //     addMessage(messageData)
        
    // }

    const [] = useState(null);
    const [messageData, setMessageData] = useState('');
    

    // function getMessage(e) {
    //     setMessageData({...messageData, [e.target.name]: e.target.value})
    //     console.log(messageData)
    // }

    const enter = (event) => {
        // setState(event.key);
        // console.log(state)
        // if (event.keyPressed === "Enter") {
        //     submit(messageData)
        // }
     }

    return (
        <div className='send-message-form'>
            <form onSubmit={submit}>
                <input 
                name='message'
                onChange={(e) => setMessageData(e.target.value)}
                className='message'
                id = "inputID"
                placeholder-color = "white"
                placeholder = "Message"
                type = "text"
                color = "white"
                value = {messageData}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}


export default SendMessageForm