import * as api from "../api/userAPI.js"
import { allUsers, addUser, removeUser, loginUser } from "../state/usersSlice.js"

export const getUsers = () => async (dispatch) => {
    try {
        const {users} = await api.readUsers();
        dispatch(allUsers(users))
    } catch (error) {
        console.log(error)
    }
}

export const postUser = (newUser) => async (dispatch) => {
    try {
        const { user } = await api.createUser(newUser);
        dispatch(addUser(user));
        dispatch(loginUser({user_ID: user._id, loggedIn: true}))
    } catch (error) {
        
    }
}

export const patchUser = (id, updatedUser) => async (dispatch) => {

}

export const deleteUser = (id) => async (dispatch) => {
    try {
        const { user } = await api.deleteUser(id)
        dispatch(removeUser(user))
    } catch (error) {
        console.log(error)
    }
}