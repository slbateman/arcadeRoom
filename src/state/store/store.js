

import {configureStore } from '@reduxjs/toolkit';
import contentReducer from '../contentSlice'; 
import messageReducer from '../messagetSlice';

export const store = configureStore({
    reducer:{
        content: contentReducer,
        message: messageReducer
    }
});