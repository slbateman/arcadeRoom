

import {configureStore } from '@reduxjs/toolkit';
import contentReducer from '../contentSlice'; 
import messageReducer from '../messageSlice';

 const store = configureStore({
    reducer:{
        content: contentReducer,
        message: messageReducer,
    }
});

export default store; 