import React from 'react'
import './chat.css'

function SendMessageForm() {
    return (
        <div className='send-message-form'>
            <form>
                <input className='message'
                id = "inputID"
                placeholder-color = "white"
                placeholder = "Message"
                type = "text"
                color = "white"
                />
            </form>
        </div>
    )
}


export default SendMessageForm