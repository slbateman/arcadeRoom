import React from "react";
import { useState } from "react";

const UserMessageList = () => {
  const [messageData, setMessageData] = useState("");
  const submit = () => {};
  return (
    <div className="pm-area">
      <div className="pm-messages">
          
      </div>
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
