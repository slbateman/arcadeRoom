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
    editUser: (state, action) => { },
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
      updateUser(state.users[index]._id, { socket_id: "", active: false })
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
    //game stuff
    editUserMsgTotal: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].msgTotal = action.payload.msgTotal;
      updateUser(action.payload._id, { msgTotal: action.payload.msgTotal });
    },
    editUserPmsTotal: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].pmsTotal = action.payload.pmsTotal;
      updateUser(action.payload._id, { pmsTotal: action.payload.pmsTotal });
    },
    editUserLevel: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].level = action.payload.level;
      updateUser(action.payload._id, { level: action.payload.level });
    },
    editUserExp: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].exp = action.payload.exp;
      updateUser(action.payload._id, { exp: action.payload.exp });
    },
    editUserLevelReq: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].nextLevelReq = action.payload.nextLevelReq;
      updateUser(action.payload._id, { nextLevelReq: action.payload.nextLevelReq });
    },
    editUserRank: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].rank = action.payload.rank;
      updateUser(action.payload._id, { rank: action.payload.rank });
    },
  editBadges: (state, action) => {
    const index = state.users.findIndex(
      (user) => user._id === action.payload._id
      ); 
    state.users[index].badges = action.payload.badges
    updateUser(action.payload._id, {badges: action.payload.badges})
  },
  editRankPoints: (state, action) => {
    const index = state.users.findIndex(
      (user) => user._id === action.payload._id
      ); 
    state.users[index].rankPoints = action.payload.rankPoints
    updateUser(action.payload._id, {rankPoints: action.payload.rankPoints})
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
  editUserMsgTotal,
  editUserPmsTotal,
  editUserLevel,
  editUserExp,
  editUserLevelReq,
  editUserRank,
  editBadges,
  editRankPoints,
} = usersSlice.actions;

export const selectUsers = (state) => state.users.users;
export const selectLocalUserInfo = (state) => state.users.localUserInfo;

export default usersSlice.reducer;
