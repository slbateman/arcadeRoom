//index.js
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, } from "react-router-dom";
// import { Provider } from "react-redux";
// import Store from "./store";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider > */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
