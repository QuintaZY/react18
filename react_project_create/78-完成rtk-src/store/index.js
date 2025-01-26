// 使用RTK 创建store
import {configureStore, createSlice} from "@reduxjs/toolkit";

// createSlice 创建reducer的切片。
const stuSlice = createSlice({
    name: "stu",
    initialState: {
        name: "张三",
        age: 18
    },
    reducers: {
        // reducer 中可以通过不同的方法实现对state的修改， 方法接受两个参数 state, action、 state 是当前state， action 是一个对象， action.payload 是action的参数。
        // 修改state的函数
        changeName(state, action) {
            console.log('修改name的方法', action);
            // 修改state
            state.name = action.payload;
        },
        changeAge(state, action) {
            console.log('修改age的方法', action);
            state.age = action.payload;
        }
    }
});

// 切片对象会自动的生成action
export const {changeName, changeAge} = stuSlice.actions;

const store = configureStore(
    {
        reducer: {
            student: stuSlice.reducer
        }
    }
)

export default store;