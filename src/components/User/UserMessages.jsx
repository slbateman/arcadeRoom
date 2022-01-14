import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserMessageList from "./UserMessageList";
import UserPMList from "./UserPMList";

const UserMessages = () => {
    const [pm_id, setPM_id] = useState()
  return (
    <div className="messages">
        <UserPMList setPM_id={setPM_id} />
      <Routes>
        <Route path="/" />
        <Route path={`/${pm_id}`} element={<UserMessageList pm_id={pm_id}/>} />
      </Routes>
    </div>
  );
};

export default UserMessages;
