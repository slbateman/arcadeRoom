import {createSlice} from '@reduxjs/toolkit';
import badges from '../components/Game/badgeInfo'; 


export const badgeSlice = createSlice ({
    name: 'badge',
    initialState: {
      badges:  badges
    },
    addBadges: (state, action) => {
      state.content = action.payload;
      localStorage.setItem("storedBadges", JSON.stringify(state.badges)); 
    },
   deleteBadges: (state, action) => {
    state.content.splice(action.payload, 1)
    localStorage.setItem("storedBadges",JSON.stringify(state.badges))
   },

})

export const {addBadges, deleteBadges} = badgeSlice.actions;
export const selectBadge = (state) => state.badges.badges;
export default badgeSlice.reducer; 