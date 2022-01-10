import * as api from "../api/chatroomAPI.js";
import {
  allChatrooms,
  addChatroom,
  removeChatroom,
  editChatroom,
} from "../state/chatroomSlice.js";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.readChatroom;
    dispatch(allChatrooms(data));
  } catch (error) {
    console.log(error);
  }
};

export const postChatroom = (newChatroom) => async (dispatch) => {
  try {
    const { data } = await api.createChatroom(newChatroom);
    dispatch(addChatroom(data));
  } catch (error) {
    console.log(error);
  }
};

export const patchChatroom = (id, updatedChatroom) => async (dispatch) => {
    try {
        const {data} = await api.updateChatroom(id, updatedChatroom)
        dispatch(editChatroom(data))
    } catch (error) {
        console.log(error)
    }
}

export const deleteChatroom = (id) => async (dispatch) => {
    try {
        const {data} = await api.removeChatroom(id)
        dispatch(removeChatroom(data))
    } catch (error) {
        console.log(error)
    }
}