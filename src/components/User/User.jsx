//User.jsx
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import "./user.css";
import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import UserLeaderboard from "./UserLeaderboard";
import UserLogin from "./UserLogin";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";

import UserSettings from "./UserSettings";

function User() {
  const loggedIn = true;
  // const navigate = useNavigate();

  return (
    <div className="user">
      {loggedIn ? <UserMenu /> : <Navigate to="/user/login" />}
      <div className="user-menu-vertical-line"></div>
      <Routes>
        <Route path="/profile" element={loggedIn ? <UserProfile /> : <Navigate to="/user/login" /> } />
        <Route path="/login" element={!loggedIn ? <UserLogin /> : <Navigate to="/user/profile" /> } />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/leaderboard" element={<UserLeaderboard />} />
      </Routes>
    </div>
  );
}

export default User;
