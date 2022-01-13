import * as api from "../api/userAPI.js";
import {
  allUsers,
  addUser,
  editUser,
  removeUser,
} from "../state/usersSlice.js";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.readUsers();
    dispatch(allUsers(data));
  } catch (error) {
    console.log(error);
  }
};

export const postUser = (newUser) => async (dispatch) => {
  try {
    const { data } = await api.createUser(newUser);
    dispatch(addUser(data));
  } catch (error) {
    console.log(error);
  }
};

export const patchUser = (id, updatedUser) => async (dispatch) => {
  try {
    await api.updateUser(id, updatedUser);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteUser(id);
    dispatch(removeUser(data));
  } catch (error) {
    console.log(error);
  }
};
