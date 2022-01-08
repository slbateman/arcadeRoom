import { createSlice } from "@reduxjs/toolkit";

let users = []

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
      state.users = action.payload
    },
    loginUser: (state, action) => {
      state.localUserInfo = action.payload;
      localStorage.setItem(
        "localUserInfo",
        JSON.stringify(state.localUserInfo)
      );
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
      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem(
        "localUserInfo",
        JSON.stringify(state.localUserInfo)
      );
    },
    removeUser: (state, action) => {
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
      state.users[action.payload.userIndex].color = action.payload.color;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    editUserMsgDensity: (state, action) => {
      state.users[action.payload.userIndex].msgDensity = action.payload.msgDensity;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    editUserMsgBrightness: (state, action) => {
      state.users[action.payload.userIndex].msgBrightness =
        action.payload.msgBrightness;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const {
  allUsers,
  loginUser,
  addUser,
  removeUser,
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
