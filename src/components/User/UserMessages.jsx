import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import UserMessageList from "./UserMessageList";
import UserPMList from "./UserPMList";

const UserMessages = () => {
  const location = useLocation();
  const [pm_id, setPM_id] = useState();
  let locationPM_id 
  useEffect(() => {
    if (location) {
      locationPM_id = location.pathname.substr(15, 80);
      setPM_id(locationPM_id);
    }
  }, [location]);

  return (
    <div className="messages">
      <UserPMList setPM_id={setPM_id} pm_id={pm_id} />
      <Routes>
        <Route path="/" />
        <Route path={`/${pm_id}`} element={<UserMessageList pm_id={pm_id} />} />
      </Routes>
    </div>
  );
};

export default UserMessages;
