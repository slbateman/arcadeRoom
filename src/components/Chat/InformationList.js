//InformationList.js
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 

import React from 'react'
import './chat.css'

function InformationList() {
    return (
        <div className='information-list'>
            <div className='space text-color-pink big-text'>
                This Chatroom
            </div>
            <div className='space text-color big-text'>
                Active Users
            </div>
            <div className='space text-color-purple big-text'>
                Inactive Users
            </div>
        </div>
    )
}

export default InformationList