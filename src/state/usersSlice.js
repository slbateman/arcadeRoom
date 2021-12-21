import { createSlice } from "@reduxjs/toolkit";
import UsersData from "./UsersData";

let users = JSON.parse(localStorage.getItem("users"));
let localUserInfo = JSON.parse(localStorage.getItem("localUserInfo"));

if (!users) {
  users = UsersData;
  localStorage.setItem("users", JSON.stringify(users));
}
if (!localUserInfo) {
  localUserInfo = {
    userIndex: users.length,
    username: `user${users.length}`,
    loggedIn: false,
  };
  users.push({
    username: localUserInfo.username
  });
  localStorage.setItem("localUserInfo", JSON.stringify(localUserInfo))
  localStorage.setItem("users", JSON.stringify(users))
}

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users,
    localUserInfo,
  },
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    deleteUser: (state, action) => {
      state.users.splice(action.payload, 1);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    editUserAvatar: (state, action) => {
      state.users[action.payload.index].avatar = action.payload.avatar;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    editUserBio: (state, action) => {
      state.users[action.payload.index].bio = action.payload.bio;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    editUserEmail: (state, action) => {
      state.users[action.payload.index].email = action.payload.email;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    editUserColor: (state, action) => {
      state.users[action.payload.index].color = action.payload.color;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    editUserMsgDensity: (state, action) => {
      state.users[action.payload.index].MsgDensity = action.payload.MsgDensity;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    editUserMsgBrightness: (state, action) => {
      state.users[action.payload.index].MsgBrightness =
        action.payload.MsgBrightness;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const {
  addUser,
  deleteUser,
  editUserAvatar,
  editUserBio,
  editUserEmail,
  editUserColor,
  editUserMsgDensity,
  editUserMsgBrightness,
} = usersSlice.actions;

export const selectUsers = (state) => state.users.users;
export const selectLocalUserInfo = (state) => state.users.localUserInfo;

export default usersSlice.reducer;
