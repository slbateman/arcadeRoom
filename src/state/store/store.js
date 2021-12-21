

import {configureStore } from '@reduxjs/toolkit';
import contentReducer from '../contentSlice'; 
import messageReducer from '../messageSlice';
import usersReducer from '../usersSlice'

 const store = configureStore({
    reducer:{
        content: contentReducer,
        message: messageReducer,
        users: usersReducer,
    }
});

export default store; 