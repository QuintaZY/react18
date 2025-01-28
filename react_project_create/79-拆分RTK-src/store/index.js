// 使用RTK 创建store
import {configureStore, createSlice} from "@reduxjs/toolkit";

import {stuReducer} from './stuSlice.js'
import {schoolReducer} from "./schoolSlice.js";


const store = configureStore({
    reducer: {
        student: stuReducer, school: schoolReducer
    }
})

export default store;