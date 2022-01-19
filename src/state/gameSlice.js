import {createSlice} from '@reduxjs/toolkit';
import badges from '../components/Game/badgeInfo'; 


export const gameSlice = createSlice ({
    name: 'game',
    initialState: {
      content:  badges
    },

})