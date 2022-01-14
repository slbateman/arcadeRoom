import { createSlice } from '@reduxjs/toolkit';
import { updatePM } from '../api/pmAPI';
let pms = []


export const pmSlice = createSlice({
    name: 'pms',
    initialState: {
        pms: pms
    },

    reducers: {
        allPMs: (state,action) => {
            console.log(action.payload)
            state.pms = action.payload
            console.log(state.pms)
        },
        addPM: (state, action) => {
            console.log(action.payload)

            state.pms.push(action.payload)

            localStorage.setItem('pms', JSON.stringify(state.pm))
        },
        editPM: (state, action) => {
            //this only works if you send the entire pm data
            state.pms.map((data) => (data._id === action.payload._id ? action.payload : data))
        },
        addMessages: (state, action) => {
            const index = state.pms.findIndex((e) => e._id === action.payload._id)
            state.pms[index].messages = action.payload.messages
            updatePM(action.payload._id, {messages: action.payload.messages})
            localStorage.setItem('pm', JSON.stringify(state.pm))
        },

        removePM: (state, action) => {

            state.pms.splice(state.pms.findIndex((e) => e._id === action.payload, 1));

            localStorage.setItem('pms', JSON.stringify(state.pm))
        }
    }
})

export const { allPMs, addPM, addMessages, removePM } = pmSlice.actions;
export const selectPMs = (state) => state.pms.pms;
export default pmSlice.reducer;