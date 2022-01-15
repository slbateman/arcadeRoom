import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLocalUserInfo, selectUsers } from '../../state/usersSlice'
import { useLocation } from 'react-router-dom';
import './PM.css';
import { selectMessages, addMessages, deleteMessages } from '../../state/messageSlice';
 

const PMChatBox = () => {

  const users = useSelector(selectUsers);
  const localUser = useSelector(selectLocalUserInfo);
  const location = useLocation()
 // console.log(location.pathname)
  const userName = location.pathname.substr(4, 65);
  //console.log(userName)
  const userInfo = users.find((user) => user.username === userName)
 // console.log(userInfo)
  const localUserInfo = users.find((user) => user._id === localUser.user_id);
  console.log(localUserInfo)

  const messages = useSelector(selectMessages);
  console.log(messages)
  const [messageData, setMessageData] = useState();
  const dispatch = useDispatch();

  const submit = (e) => {

    e.preventDefault()
    console.log()
    dispatch(addMessages({ _id: localUserInfo._id, message: messageData }))
    setMessageData('')
  }


  return (


    !userInfo ? <div></div> :
      <>
        <div className='PMroom'>
          {userInfo.username} conversation  {/* pm room  */}

        </div>
        <div className='chatbox'>
          {!messages ? <div></div> :

            <div>
              {messages.map((message, i) => {
                const user = users.find((e) => e._id === message._id)


                return (
                  !user ? <div></div> :
                    <div key={`message${i}`}>
                      <div className="message-user-info">

                        <img
                          key={`modal${i}`}
                          className="message-avatar user-button"
                          src={user.avatar}
                          alt=""
                          style={{ border: `2px solid ${user.color}` }}
                        />



                        <div className="message-block">
                          <h5>{user.username}</h5>
                          <div
                            className="message-text"
                            style={{
                              border: `2px solid ${user.color}`,
                              color: `${localUser.msgBrightness}`,
                              fontSize: `${localUser.msgDensity}px`,
                            }}
                          >
                            {message.message}
                          </div>
                        </div>

                      </div>
                      <br /><br />
                    </div>

                )

              }
              )}

            </div>}</div>

        <div className='send-pm-form'>
          <form onSubmit={submit}
          >
            <input
              name='message'
              onChange={(e) => setMessageData(e.target.value)}
              className='message'
              id="inputID"
              placeholder="Message"
              type="text"
              color="white"
              value={messageData}
            />
          </form>

        </div>
 
      </>
  );
}


export default PMChatBox; 