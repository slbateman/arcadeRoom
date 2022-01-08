//UserProfile.jsx
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import { useSelector } from "react-redux";
import { selectLocalUserInfo, selectUsers } from "../../state/usersSlice";
import editIcon from "../../images/editIcon.png";
import { useState } from "react";
import UserProfileEditAvatar from "./UserProfileEditAvatar";
import UserProfileEditBio from "./UserProfileEditBio";
import UserProfileEditEmail from "./UserProfileEditEmail";

function UserProfile() {
  const users = useSelector(selectUsers);
  const localUserInfo = useSelector(selectLocalUserInfo);
  const user = users.find((e) => e._id === localUserInfo.user_id);

  const [showEditAvatar, setShowEditAvatar] = useState(false);
  const [showEditBio, setShowEditBio] = useState(false);
  const [showEditEmail, setShowEditEmail] = useState(false);

  const editAvatar = () => setShowEditAvatar(true);
  const editBio = () => setShowEditBio(true);
  const editEmail = () => setShowEditEmail(true);

  return (
    !user ? <div></div> :
    <div className="user-profile">
      <div className="user-profile-identification">
        <img
          className="user-profile-avatar"
          style={{ border: `3px solid ${user.color}` }}
          src={user.avatar}
          alt="avatar"
        />
        <img
          className="user-profile-edit-icon user-profile-edit-icon-avatar"
          src={editIcon}
          alt="edit"
          onClick={() => editAvatar()}
        />
        <div>
          <h2 className="user-profile-username">{user.username}</h2>
          <div className="user-profile-lvl">lvl: </div>
          <div className="user-profile-rank">rank: </div>
          <div className="user-profile-badges">badges: </div>
        </div>
      </div>
      <div className="user-profile-bio">
        <h3
          className="user-profile-bio-label"
          style={{ color: `${user.color}` }}
        >
          bio{" "}
          <img
            className="user-profile-edit-icon"
            src={editIcon}
            alt="edit"
            onClick={() => editBio()}
          />
        </h3>
        <div
          className="user-profile-bio-textbox"
          style={{ border: `3px solid ${user.color}` }}
        >
          <p className="user-profile-bio-text">{user.bio}</p>
        </div>
        <br />
        <br />
        <div>
          <span className="user-profile-email">
            email{" "}
            <img
              className="user-profile-edit-icon"
              src={editIcon}
              alt="edit"
              onClick={() => editEmail()}
            />
          </span>
          <br />
          <span className="user-profile-email">{user.email}</span>
        </div>
      </div>
      <UserProfileEditAvatar
        showEditAvatar={showEditAvatar}
        setShowEditAvatar={setShowEditAvatar}
      />
      <UserProfileEditBio
        showEditBio={showEditBio}
        setShowEditBio={setShowEditBio}
      />
      <UserProfileEditEmail
        showEditEmail={showEditEmail}
        setShowEditEmail={setShowEditEmail}
      />
    </div>
  );
}

export default UserProfile;
