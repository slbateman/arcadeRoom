import * as api from "../api/userAPI.js";
import { allUsers, addUser, editUser, removeUser } from "../state/usersSlice.js";

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
  } catch (error) {
    console.log(error);
  }
};

export const patchUser = (id, updatedUser) => async (dispatch) => {
  try {
    const {data} = await api.updateUser(id, updatedUser);
    console.log(data)
    dispatch(editUser({_id: id, data}))
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
