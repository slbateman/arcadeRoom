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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers, postUser } from "./actions/userActions";
import { selectLocalUserInfo } from "./state/usersSlice";

import Test from "./components/PM/test";

function App() {
  const dispatch = useDispatch()
  const localUserInfo = useSelector(selectLocalUserInfo)

  useEffect(() => {
    if (!localUserInfo.user_id) {
      const randomNumber = Math.floor(Math.random()*100000000000000)
      dispatch(postUser({
      username: `user${randomNumber}`,
      password: ""
    }))}
  }, [])


  useEffect(() => {
    dispatch(getUsers())
  })

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/*" element={<Chat />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/user/*" element={<User />} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </div>
  );
}

export default App;
