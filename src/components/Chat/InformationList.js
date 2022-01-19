//InformationList.js
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLocalUserInfo, selectUsers } from "../../state/usersSlice";
import "./chat.css";
import { UserModal } from "./UserModal";

function InformationList({ chatroom }) {
  const users = useSelector(selectUsers);
  const localUserInfo = useSelector(selectLocalUserInfo)
  const localUser = users.find((e) => e._id === localUserInfo.user_id)
  let thisRoomUsers = [];
  const [modalUser, setModalUser] = useState();
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  if (chatroom) {
    chatroom.messages.map((message) => {
      if (thisRoomUsers.includes(message.user_id)) {
        console.log("userID already in array");
      } else {
        thisRoomUsers.push(message.user_id);
        console.log(thisRoomUsers);
      }
      return thisRoomUsers;
    });
  }

  useEffect(() => {
    if (chatroom) {
      chatroom.messages.map((message) => {
        if (thisRoomUsers.includes(message.user_id)) {
          console.log("userID already in array");
        } else {
          thisRoomUsers.push(message.user_id);
          console.log(thisRoomUsers);
        }
        return thisRoomUsers;
      });
    }
  }, [chatroom]);

  return !users || !chatroom ? (
    <div></div>
  ) : (
    <div className="information-list">
      <UserModal
        show={show}
        close={closeModalHandler}
        modalUser={modalUser}
        localUser={localUser}
      />
      <div className="space text-color-pink big-text">This Chatroom</div>
      <div className="this-room-list">
        {thisRoomUsers.map((user_id) => {
          const user = users.find((user) => user._id === user_id);
          return (
            <div>
              <div className="list-user">
                <img
                  className="list-user-avatar"
                  onClick={(x) => {setShow(true); setModalUser(user)}}
                  style={
                    user.active
                      ? { border: `1px solid ${user.color}` }
                      : { border: " 1px solid grey" }
                  }
                  src={user.avatar}
                  alt=""
                />
                <div
                  style={user.active ? { color: "white" } : { color: "grey" }}
                >
                  {user.username}
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </div>
      <div className="space text-color big-text">Active Users</div>
      <div className="this-room-list">
        {users.map((user) => {
          if (user.active)
            return (
              <div>
                <div className="list-user">
                  <img
                    className="list-user-avatar"
                    onClick={(x) => {setShow(true); setModalUser(user)}}
                    style={
                      user.active
                        ? { border: `1px solid ${user.color}` }
                        : { border: " 1px solid grey" }
                    }
                    src={user.avatar}
                    alt=""
                  />
                  <div
                    style={user.active ? { color: "white" } : { color: "grey" }}
                  >
                    {user.username}
                  </div>
                </div>
                <br />
              </div>
            );
        })}
      </div>
      <div className="space text-color-purple big-text">Inactive Users</div>
      <div className="this-room-list">
        {users.map((user) => {
          if (!user.active && user.password !== "")
            return (
              <div>
                <div className="list-user">
                  <img
                    className="list-user-avatar"
                    onClick={(x) => {setShow(true); setModalUser(user)}}
                    style={
                      user.active
                        ? { border: `1px solid ${user.color}` }
                        : { border: " 1px solid grey" }
                    }
                    src={user.avatar}
                    alt=""
                  />
                  <div
                    style={user.active ? { color: "white" } : { color: "grey" }}
                  >
                    {user.username}
                  </div>
                </div>
                <br />
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default InformationList;
