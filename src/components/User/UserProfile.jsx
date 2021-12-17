import DataFile from "../DataFile";

function UserProfile() {
  const userIndex = 2;
  return (
    <div className="user-profile">
      <div className="user-profile-identification">
        <img
          className="user-profile-avatar"
          style={{ border: `3px solid ${DataFile[userIndex].color}` }}
          src={DataFile[userIndex].img}
          alt="avatar"
        />
        <div>
          <h2 className="user-profile-username">{DataFile[userIndex].name}</h2>
          <div className="user-profile-lvl">lvl: </div>
          <div className="user-profile-rank">rank: </div>
          <div className="user-profile-badges">badges: </div>
        </div>
      </div>
      <div className="user-profile-bio">
        <h3
          className="user-profile-bio-label"
          style={{ color: `${DataFile[userIndex].color}` }}
        >
          bio
        </h3>
        <div
          className="user-profile-bio-textbox"
          style={{ border: `3px solid ${DataFile[userIndex].color}` }}
        >
          <p className="user-profile-bio-text">{DataFile[userIndex].bio}</p>
        </div>
        <br/>
        <br/>
        <div>
          <span className="user-profile-email">email</span>
          <br />
          <span className="user-profile-email">
            {DataFile[userIndex].email}
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
