//App.js
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Chat from "./components/Chat/Chat";
import AboutUs from "./components/AboutUs";
import User from "./components/User/User";
//import Test from "./components/PM/test";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers, postUser } from "./actions/userActions";
import { getChatrooms } from "./actions/chatroomActions";
import {
  editDisconnect,
  editUserActive,
  editUserAvatar,
  editUserBio,
  editUserColor,
  selectLocalUserInfo,
  selectUsers,
} from "./state/usersSlice";
import { getPMs } from "./actions/pmActions";
import Profiles from "./components/Profiles";
import PMChatBox from "./components/PM/PMChatBox";
import socket from "./socket/socket";
import { updateUser } from "./api/userAPI";
import { addMessages } from "./state/chatroomSlice";
import { addPMMessages } from "./state/pmSlice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const localUserInfo = useSelector(selectLocalUserInfo);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getChatrooms());
    dispatch(getPMs());
  }, []);

  useEffect(() => {
    if (!localUserInfo.user_id) {
      const randomNumber = Math.floor(Math.random() * 100000000000000);
      // if (users.findIndex((e) => e.username === `user${randomNumber}`) === -1) {
      dispatch(
        postUser({
          username: `user${randomNumber}`,
          password: "",
        })
      );
      // }
    }
  }, []);

  useEffect(() => {
    if (socket.connected) {
      const userData = {
        _id: localUserInfo.user_id,
        socket_id: socket.id,
        active: true,
      };
      dispatch(editUserActive(userData));
      socket.emit("userConnection", userData);
      updateUser(userData._id, {
        active: userData.active,
        socket_id: userData.socket_id,
      });
    }
  }, [localUserInfo]);

  useEffect(() => {
    if (users.length > 0) {
      socket.on("userConnection", (userData) => {
        const user = users.find((e) => e._id === userData._id);
        if (!user) {
          dispatch(getUsers());
          // dispatch(editUserActive(userData));
        } else {
          dispatch(editUserActive(userData));
        }
      });
    }
  }, [users]);

  // Socket.On actions
  useEffect(() => {
    socket.on("userDisconnected", (socket_id) => {
      dispatch(editDisconnect(socket_id));
    });
    socket.on("sendChatroomMessage", (messageData) => {
      dispatch(addMessages(messageData));
    });
    socket.on("updateUserColor", (colorData) => {
      dispatch(editUserColor(colorData));
    });
    socket.on("updateUserAvatar", (avatarData) => {
      dispatch(editUserAvatar(avatarData));
    });
    socket.on("updateUserBio", (bioData) => {
      dispatch(editUserBio(bioData));
    });
    socket.on("sendPMMessage", (messageData) => {
      dispatch(addPMMessages(messageData));
    });
    socket.on("newPM", () => {dispatch(getPMs())})
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/*" element={<Chat />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/user/*" element={<User />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/pm/*" element={<PMChatBox />} />
      </Routes>
    </div>
  );
}

export default App;
