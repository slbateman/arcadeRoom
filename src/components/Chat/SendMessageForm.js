import React, {useState} from 'react'
import './chat.css'
import { useSelector, useDispatch} from 'react-redux'
import { addMessages } from '../../state/chatroomSlice'
import { selectLocalUserInfo } from '../../state/usersSlice'

function SendMessageForm({chatroom}) {

    const dispatch = useDispatch();
    const submit = (e) => {
        e.preventDefault()
        dispatch(addMessages({_id: chatroom._id, messages: [...chatroom.messages, {user_id: localUserInfo.user_id, message: messageData}]}))
        setMessageData('')
    }
    
    const localUserInfo = useSelector(selectLocalUserInfo)

    
    const [messageData, setMessageData] = useState('');


    return (
        <div className='send-message-form'>
            <form onSubmit={submit}>
                <input 
                name='message'
                onChange={(e) => setMessageData(e.target.value)}
                className='message'
                id = "inputID"
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