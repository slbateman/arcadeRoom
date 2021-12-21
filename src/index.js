//index.js
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store/store";
import App from "./App";
import "./index.css";
//import ScrollToTop from "react-scroll-to-top";

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <BrowserRouter>
      {/* <ScrollToTop smooth /> */}
        <App />
      </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
