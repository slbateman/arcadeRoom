import * as api from "../api/chatroomAPI.js";
import {
  allChatrooms,
  addChatroom,
  removeChatroom,

} from "../state/chatroomSlice.js";

export const getChatrooms = () => async (dispatch) => {
  try {
    const { data } = await api.readChatrooms();
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
        await api.updateChatroom(id, updatedChatroom)
    } catch (error) {
        console.log(error)
    }
}

export const deleteChatroom = (id) => async (dispatch) => {
    try {
        const {data} = await api.deleteChatroom(id)
        dispatch(removeChatroom(data))
    } catch (error) {
        console.log(error)
    }
}