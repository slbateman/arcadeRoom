//User.jsx
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserLeaderboard from "./UserLeaderboard";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";
import UserSettings from "./UserSettings";

function User() {
  // const loggedIn = true;
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (loggedIn) {
  //     navigate("/user/profile");
  //   } else {
  //     navigate("/user/login");
  //   }
  // }, [loggedIn, navigate]);

  return (
    <div className="user">
      <UserMenu />
      <div className="user-menu-vertical-line"></div>
      <Routes>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/leaderboard" element={<UserLeaderboard />} />
      </Routes>
    </div>
  );
}

export default User;
