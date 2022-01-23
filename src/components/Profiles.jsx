import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addPM } from "../state/pmSlice";
import { selectLocalUserInfo, selectUsers } from "../state/usersSlice";
import { Link } from "react-router-dom";

import AllBadges from '../components/Game/AllBadges'; 
//import UserBadges from '../components/Game/UserBadges'; 
//

const Profiles = () => {
  const users = useSelector(selectUsers);
  const localUserInfo = useSelector(selectLocalUserInfo);
  const dispatch = useDispatch();
  const location = useLocation();
  const profile = location.pathname.substr(10, 65);
  const localUser = !users
    ? null
    : users.find((e) => e._id === localUserInfo.user_id);
  const profileInfo = !users ? null : users.find((e) => e.username === profile);

  const newConvo = () => {
    dispatch(addPM({ users: [profileInfo._id, localUser._id] }));
  };

  return !profileInfo ? (
    <div></div>
  ) : (
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
          <div className="user-profile-lvl">lvl: {profileInfo.level}</div>
          <div className="user-profile-rank">rank: {profileInfo.rank}</div>
          <div className="user-profile-badges">badges:<AllBadges/> </div> 
          {/* <UserBadges badges={profileInfo.badges} /> */}
        </div>
      </div>
      <div className="message-button-margin">
        <div
          className="message-button link"
          onClick={() => {
            newConvo();
          }}
        >
          <Link className="link" to={`../pm/${profileInfo.username}`}>
            {" "}
            send message
          </Link>
        </div>
      </div>
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
      </div>
    </div>
  );
};

export default Profiles;
