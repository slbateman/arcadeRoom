//App.js
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Chat from './components/Chat';
import AboutUs from './components/AboutUs';
import User from './components/User';
import UserLogin from './components/UserLogin';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/login" element={<UserLogin />} />
      </Routes>
    </div>
  );
}

export default App;
