//UserSettings.jsx
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, patchUser } from "../../actions/userActions";
import { selectUsers, selectLocalUserInfo } from "../../state/usersSlice";

function UserSettings() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const localUserInfo = useSelector(selectLocalUserInfo);
  const user = users.find((e) => e._id === localUserInfo.user_id);

  
  const [msgDensity, setMsgDensity] = useState(!user ? "" : user.msgDensity);
  const updateMsgDensity = () => {
    dispatch(patchUser(localUserInfo.user_id, { msgDensity: msgDensity }));
    dispatch(getUsers());
  };
  const brightnessList = [
    "#696969",
    "#707070",
    "#787878",
    "#808080",
    "#888888",
    "#909090",
    "#989898",
    "#A0A0A0",
    "#A8A8A8",
    "#A9A9A9",
    "#B0B0B0",
    "#B8B8B8",
    "#BEBEBE",
    "#C0C0C0",
    "#C8C8C8",
    "#D0D0D0",
    "#D3D3D3",
    "#D8D8D8",
    "#DCDCDC",
    "#E0E0E0",
    "#E8E8E8",
    "#F0F0F0",
    "#F5F5F5",
    "#F8F8F8",
    "#FFFFFF",
  ];
  const [msgBrightness, setMsgBrightness] = useState(!user ? "" : user.msgBrightness);
  const updateMsgBrightness = () => {
    dispatch(
      patchUser(localUserInfo.user_id, { msgBrightness: msgBrightness })
    );
    dispatch(getUsers());
  };

  const colorList = [
    "#ffffff",
    "#6bf4ff",
    "#befe3b",
    "#fe7fff",
    "#001aff",
    "#00ff19",
    "#bd00ff",
  ];

  const updateColor = (color) => {
    dispatch(patchUser(localUserInfo.user_id, { color: color }));
    dispatch(getUsers());
  };

  return (
    !user ? <div></div> :
    <div className="user-settings">
      <h4 className="user-settings-headers">color theme</h4>
      <div className="user-settings-color-themes">
        {colorList.map((hexColor, i) => (
          <div
            className={`user-settings-color-theme ${
              hexColor === user.color ? "color-active" : ""
            }`}
            style={{ backgroundColor: `${hexColor}` }}
            onClick={() => {
              updateColor(hexColor);
            }}
          ></div>
        ))}
      </div>
      <h4 className="user-settings-headers">message density</h4>
      <div>
        <input
          className="user-settings-message-density-bar"
          type="range"
          min="6"
          max="32"
          value={msgDensity}
          onChange={(e) => {
            setMsgDensity(e.target.value);
            updateMsgDensity();
          }}
        />
      </div>
      <h4 className="user-settings-headers">message brightness</h4>
      <div>
        <input
          className="user-settings-message-brightness-bar"
          type="range"
          min="0"
          max="24"
          value={brightnessList[msgBrightness]}
          onChange={(e) => {
            setMsgBrightness(brightnessList[e.target.value]);
            updateMsgBrightness();
          }}
        />
      </div>
      <div className="settings-message-example">
        <div className="message-user-info">
          <img
            className="message-avatar"
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
                color: `${user.msgBrightness}`,
                fontSize: `${user.msgDensity}px`,
              }}
            >
              Sample text, if you were to make a message, it would look like
              this.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
