import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePM } from "../../api/pmAPI";
import socket from "../../socket/socket";
import { addPMMessages, selectPMs } from "../../state/pmSlice";
import { selectUsers, selectLocalUserInfo } from "../../state/usersSlice";

const UserMessageList = ({ pm_id }) => {
  const dispatch = useDispatch()
  const PMs = useSelector(selectPMs);
  const pm = PMs.find((e) => e._id === pm_id);
  const users = useSelector(selectUsers);
  const localUserInfo = useSelector(selectLocalUserInfo);
  const [messageData, setMessageData] = useState("");
  const localUser = users.find((e) => e._id === localUserInfo.user_id);

  const submit = (e) => {
    e.preventDefault()
    const msgData = {
      _id: pm_id,
      messages: [...pm.messages, {user_id: localUser._id, message: messageData}]
    }
    dispatch(addPMMessages(msgData))
    socket.emit("sendPMMessage", msgData)
    updatePM(msgData._id, {messages: msgData.messages})
    setMessageData("")
  };

  const messageElement = useRef(null);
  useEffect(() => {
    if (pm) {
      const objDiv = document.getElementById("messageBox");
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  }, [pm]);

  return !pm || !users ? (
    <div></div>
  ) : (
    <div className="pm-area">
        {!pm ? (
          <div></div>
        ) : (
          <div className="message-list" ref={messageElement} id="messageBox">
            <div>
              {pm.messages.map((data, i) => {
                const user = users.find((e) => e._id === data.user_id);
                return !user ? (
                  <div key={`message${i}`}></div>
                ) : (
                  <div key={`message${i}`}>
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
                            color: `${localUser.msgBrightness}`,
                            fontSize: `${localUser.msgDensity}px`,
                          }}
                        >
                          {data.message}
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      <form onSubmit={submit} className="pm-message-input">
        <input
          name="message"
          onChange={(e) => setMessageData(e.target.value)}
          className="message"
          id="inputID"
          placeholder="Message"
          type="text"
          color="white"
          value={messageData}
        />
      </form>
    </div>
  );
};

export default UserMessageList;
