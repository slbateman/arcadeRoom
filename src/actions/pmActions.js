import * as api from "../api/pmAPI.js";
import {
  allPMs,
  addPM,
  removePM,

} from "../state/pmSlice.js";

export const getPMs = () => async (dispatch) => {
  try {
    const { data } = await api.readPMs();
    dispatch(allPMs(data));
  } catch (error) {
    console.log(error);
  }
};

export const postPM = (newPM) => async (dispatch) => {
  try {
    const { data } = await api.createPM(newPM);
    dispatch(addPM(data));
  } catch (error) {
    console.log(error);
  }
};

export const patchPM = (id, updatedPM) => async (dispatch) => {
    try {
        await api.updatePM(id, updatedPM)
    } catch (error) {
        console.log(error)
    }
}

export const deletePM = (id) => async (dispatch) => {
    try {
        const {data} = await api.deletePM(id)
        dispatch(removePM(data))
    } catch (error) {
        console.log(error)
    }
}