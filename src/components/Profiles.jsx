import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { selectLocalUserInfo, selectUsers } from '../state/usersSlice'

const Profiles = () => {
    const users = useSelector(selectUsers)
    const localUserInfo = useSelector(selectLocalUserInfo)
    const location = useLocation()
    const profile = location.pathname.substr(10, 65)
    const localUser = !users ? null : users.find((e)=> e._id === localUserInfo.user_id)
    const profileInfo = !users ? null : users.find((e)=> e.username === profile)

    const newConvo = () => {}

    return (
        !profileInfo ? <div></div> :
    <div className="profiles">
      <div className="user-profile-identification">
        <img
          className="user-profile-avatar"
          style={{ border: `3px solid ${profileInfo.color}` }}
          src={profileInfo.avatar}
          alt="avatar"
        />
        <div>
          <h2 className="user-profile-username">{profileInfo.username}</h2>
          <div className="user-profile-lvl">lvl: </div>
          <div className="user-profile-rank">rank: </div>
          <div className="user-profile-badges">badges: </div>
        </div>
      </div>
      <div className='message-button' onClick={()=>{newConvo()}} >send message</div>
      <div className="user-profile-bio">
        <h3
          className="user-profile-bio-label"
          style={{ color: `${profileInfo.color}` }}
        >
          bio{" "}
        </h3>
        <div
          className="user-profile-bio-textbox"
          style={{ border: `3px solid ${profileInfo.color}` }}
        >
          <p className="user-profile-bio-text">{profileInfo.bio}</p>
        </div>
        <br />
        <br />
        <div>
          <span className="user-profile-email">
            email{" "}
          </span>
          <br />
          <span className="user-profile-email">{profileInfo.email}</span>
        </div>
      </div>
      
    </div>
    )
}

export default Profiles
