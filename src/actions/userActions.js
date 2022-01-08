import * as api from "../api/userAPI.js";
import { allUsers, addUser, removeUser } from "../state/usersSlice.js";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.readUsers();
    dispatch(allUsers(data));
  } catch (error) {
    console.log(error);
  }
};

export const postUser = (newUser) => async (dispatch) => {
  console.log(newUser);
  try {
    const { data } = await api.createUser(newUser);
    console.log(data);
    dispatch(addUser(data));
  } catch (error) {}
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
    const { user } = await api.deleteUser(id);
    dispatch(removeUser(user));
  } catch (error) {
    console.log(error);
  }
};
