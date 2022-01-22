import { createSlice } from "@reduxjs/toolkit";

let pms = [];

export const pmSlice = createSlice({
  name: "pms",
  initialState: {
    pms: pms,
  },
  reducers: {
    allPMs: (state, action) => {
      state.pms = action.payload;
    },
    addPM: (state, action) => {
      state.pms.push(action.payload);
    },
    editPM: (state, action) => {},
    addPMMessages: (state, action) => {
      const index = state.pms.findIndex((e) => e._id === action.payload._id);
      state.pms[index].messages = action.payload.messages;
    },

    removePM: (state, action) => {
      state.pms.splice(state.pms.findIndex((e) => e._id === action.payload, 1));
    },
  },
});

export const { allPMs, addPM, addPMMessages, removePM } = pmSlice.actions;
export const selectPMs = (state) => state.pms.pms;
export default pmSlice.reducer;
