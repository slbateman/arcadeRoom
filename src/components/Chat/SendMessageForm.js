import React, {useState} from 'react'
import './chat.css'
import { useSelector, useDispatch} from 'react-redux'
import { addMessages } from '../../state/chatroomSlice'
import { roomName } from './RoomsList'
import { selectLocalUserInfo } from '../../state/usersSlice'

function SendMessageForm({chatroom}) {

    const dispatch = useDispatch();
    const submit = (e) => {
        e.preventDefault()
        dispatch(addMessages({name: chatroom.name, user_id: localUserInfo.user_id, message: messageData}))
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
            </form>
        </div>
    )
}


export default SendMessageForm