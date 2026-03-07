import { configureStore } from '@reduxjs/toolkit';
import React, { useReducer } from './userSlice'
import {fruitsReducer} from './fruitsSlice'

const store = configureStore({
    reducer : {
        userInfo : useReducer ,
        fruitsinfo: fruitsReducer,
    },
});

export default store