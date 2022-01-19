import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "../api/userAPI";

let users = [];

let localUserInfo = JSON.parse(localStorage.getItem("localUserInfo"));

if (!localUserInfo) {
  localUserInfo = {
    loggedIn: false,
  };
  localStorage.setItem("localUserInfo", JSON.stringify(localUserInfo));
}

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users,
    localUserInfo,
  },
  reducers: {
    allUsers: (state, action) => {
      state.users = action.payload;
    },
    loginUser: (state, action) => {
      state.localUserInfo = action.payload;
      localStorage.setItem(
        "localUserInfo",
        JSON.stringify(state.localUserInfo)
      );
    },
    addRemoteUser: (state, action) => {

      // state.users.push(action.payload)
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      if (action.payload.password === "") {
        state.localUserInfo = { user_id: action.payload._id, loggedIn: false };
      }
      if (action.payload.password !== "") {
        state.localUserInfo = {
          user_id: action.payload._id,
          loggedIn: true,
        };
      }
      localStorage.setItem(
        "localUserInfo",
        JSON.stringify(state.localUserInfo)
      );
    },
    editUser: (state, action) => {},
    removeUser: (state, action) => {
      state.users.splice(
        state.users.findIndex((e) => e._id === action.payload, 1)
      );
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    editUserActive: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].active = action.payload.active;
      state.users[index].socket_id = action.payload.socket_id;
    },
    editDisconnect: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.socket_id === action.payload
      );
      state.users[index].active = false;
      state.users[index].socket_id = "";
      updateUser(state.users[index]._id, {socket_id: "", active: false})
    },
    editUserAvatar: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].avatar = action.payload.avatar;
    },
    editUserBio: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].bio = action.payload.bio;
    },
    editUserEmail: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].email = action.payload.email;
      updateUser(action.payload._id, { email: action.payload.email });
    },
    editUserColor: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].color = action.payload.color;
    },
    editUserMsgDensity: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].msgDensity = action.payload.msgDensity;
      updateUser(action.payload._id, { msgDensity: action.payload.msgDensity });
    },
    editUserMsgBrightness: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].msgBrightness = action.payload.msgBrightness;
      updateUser(action.payload._id, {
        msgBrightness: action.payload.msgBrightness,
      });
    },
  },
});

export const {
  allUsers,
  loginUser,
  addRemoteUser,
  addUser,
  editUser,
  removeUser,
  editUserActive,
  editDisconnect,
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
