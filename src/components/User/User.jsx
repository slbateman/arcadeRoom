//User.jsx
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import "./user.css";
import { Route, Routes, Navigate } from "react-router-dom";
import UserLeaderboard from "./UserLeaderboard";
import UserLogin from "./UserLogin";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";
import UserSettings from "./UserSettings";
import UserMessages from "./UserMessages";
import UserSignUp from "./UserSignUp";
import { useSelector } from "react-redux";
import { selectLocalUserInfo } from "../../state/usersSlice";

function User() {
  const localUserInfo = useSelector(selectLocalUserInfo)
  const loggedIn = localUserInfo.loggedIn

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={!loggedIn ? <UserLogin /> : <Navigate to="/user/profile" />}
        />
        <Route
          path="/sign-up"
          element={!loggedIn ? <UserSignUp /> : <Navigate to="/user/profile" />}
        />
        <Route
          path="/*"
          element={
            <div className="user">
              {loggedIn ? <UserMenu /> : <Navigate to="/user/login" />}
              <div className="user-menu-vertical-line"></div>
              <Routes>
                <Route
                  path="/profile"
                  element={
                    loggedIn ? <UserProfile /> : <Navigate to="/user/login" />
                  }
                />
                <Route path="/settings" element={<UserSettings />} />
                <Route path="/messages" element={<UserMessages />} />
                <Route path="/leaderboard" element={<UserLeaderboard />} />
              </Routes>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default User;
