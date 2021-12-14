//User.jsx
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLeaderboard from "./UserLeaderboard";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";
import UserSettings from "./UserSettings";

function User() {
  return (
    <div className="user">
      <UserMenu />
      <Routes>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/leaderboard" element={<UserLeaderboard />} />
      </Routes>
    </div>
  );
}

export default User;
