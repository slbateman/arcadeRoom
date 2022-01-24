//UserMenu.jsx
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";



function UserMenu() {
  const location = useLocation().pathname;
  const [profile, setProfile] = useState("");
  const [settings, setSettings] = useState("");
  const [messages, setMessages] = useState("");
  const [leaderboard, setLeaderboard] = useState("");

  useEffect(() => {
    if (location === "/user/profile") {
      setProfile("user-menu-item-active");
      setSettings("");
      setMessages("");
      setLeaderboard("");
    } else if (location === "/user/settings") {
      setProfile("");
      setSettings("user-menu-item-active");
      setMessages("");
      setLeaderboard("");
    } else if (location === "/user/messages") {
      setProfile("");
      setSettings("");
      setMessages("user-menu-item-active");
      setLeaderboard("");
    } else if (location === "/user/leaderboard") {
      setProfile("");
      setSettings("");
      setMessages("");
      setLeaderboard("user-menu-item-active");
    } else {
      setProfile("");
      setSettings("");
      setMessages("");
      setLeaderboard("");
    }
  }, [location]);
  return (
    <div className="user-menu">
      <Link className={"user-menu-item " + profile } to="/user/profile">
        <h3>Profile</h3>
      </Link>
      <hr className="user-menu-hr"/>
      <Link className={"user-menu-item " + settings } to="/user/settings">
        <h3>Settings</h3>
      </Link>
      <hr className="user-menu-hr"/>
      <Link className={"user-menu-item " + messages } to="/user/messages">
        <h3>Messages</h3>
      </Link>
      <hr className="user-menu-hr"/>
      <Link className={"user-menu-item " + leaderboard } to="/user/leaderboard">
        <h3>Leaderboard</h3>
      </Link>
      <hr className="user-menu-hr"/>
    </div>
  );
}

export default UserMenu;
