import { useSelector } from 'react-redux';
import { selectLocalUserInfo, selectUsers } from '../../state/usersSlice';
import editIcon from "../../images/editIcon.png";
import { useState } from "react";
import UserProfileEditAvatar from "./UserProfileEditAvatar";
import UserProfileEditBio from "./UserProfileEditBio";
import UserProfileEditEmail from "./UserProfileEditEmail";


function UserProfile() {
  const users = useSelector(selectUsers);
  const localUserInfo = useSelector(selectLocalUserInfo)
  // const userIndex = 0
  const userIndex = localUserInfo.userIndex;

  const [showEditAvatar, setShowEditAvatar] = useState(false)
  const [showEditBio, setShowEditBio] = useState(false)
  const [showEditEmail, setShowEditEmail] = useState(false)

  const editAvatar = () => setShowEditAvatar(true);
  const editBio = () => setShowEditBio(true);
  const editEmail = () => setShowEditEmail(true);


  return (
    <div className="user-profile">
      <div className="user-profile-identification">
        <img
          className="user-profile-avatar"
          style={{ border: `3px solid ${users[userIndex].color}` }}
          src={users[userIndex].avatar}
          alt="avatar"
        />
        <img
          className="user-profile-edit-icon user-profile-edit-icon-avatar"
          src={editIcon}
          alt="edit"
          onClick={()=>editAvatar()}
        />
        <div>
          <h2 className="user-profile-username">{users[userIndex].name}</h2>
          <div className="user-profile-lvl">lvl: </div>
          <div className="user-profile-rank">rank: </div>
          <div className="user-profile-badges">badges: </div>
        </div>
      </div>
      <div className="user-profile-bio">
        <h3
          className="user-profile-bio-label"
          style={{ color: `${users[userIndex].color}` }}
        >
          bio{" "}
          <img
            className="user-profile-edit-icon"
            src={editIcon}
            alt="edit"
            onClick={()=>editBio()}
          />
        </h3>
        <div
          className="user-profile-bio-textbox"
          style={{ border: `3px solid ${users[userIndex].color}` }}
        >
          <p className="user-profile-bio-text">{users[userIndex].bio}</p>
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
              onClick={()=>editEmail()}
            />
          </span>
          <br />
          <span className="user-profile-email">
            {users[userIndex].email}
          </span>
        </div>
      </div>
      <UserProfileEditAvatar showEditAvatar={showEditAvatar} setShowEditAvatar={setShowEditAvatar} userIndex={userIndex} />
      <UserProfileEditBio showEditBio={showEditBio} setShowEditBio={setShowEditBio} userIndex={userIndex} />
      <UserProfileEditEmail showEditEmail={showEditEmail} setShowEditEmail={setShowEditEmail} userIndex={userIndex} />
    </div>
  );
}

export default UserProfile;
