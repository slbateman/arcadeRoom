//UserSettings.jsx
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import React from "react";
import { useState } from "react";

function UserSettings() {
  const [op1Active, setOp1Active] = useState("op1-active");
  const [op2Active, setOp2Active] = useState("");
  const [op3Active, setOp3Active] = useState("");
  const [op4Active, setOp4Active] = useState("");
  const [op5Active, setOp5Active] = useState("");

  return (
    <div className="user-settings">
      <h4 className="user-settings-headers">color theme</h4>
      <div className="user-settings-color-themes">
        <div
          className={"user-settings-color-theme color-theme-op1 " + op1Active}
        ></div>
        <div
          className={"user-settings-color-theme color-theme-op2 " + op2Active}
        ></div>
        <div
          className={"user-settings-color-theme color-theme-op3 " + op3Active}
        ></div>
        <div
          className={"user-settings-color-theme color-theme-op4 " + op4Active}
        ></div>
        <div
          className={"user-settings-color-theme color-theme-op5 " + op5Active}
        ></div>
      </div>
      <h4 className="user-settings-headers">message density</h4>
      <div>
        <input className="user-settings-message-density-bar" type="range" />
      </div>
      <h4 className="user-settings-headers">message brightness</h4>
      <div>
        <input className="user-settings-message-brightness-bar" type="range" />
      </div>
    </div>
  );
}

export default UserSettings;
