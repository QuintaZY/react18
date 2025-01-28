// 创建学校的切片
import {createSlice} from "@reduxjs/toolkit";

const schoolSlice = createSlice({
    name: "school", initialState: {
        name: "北京第一中学", address: "北京"
    }, reducers: {
        changeSchoolName(state, action) {
            console.log('修改name的方法', action);
            state.name = action.payload;
        }, changeSchoolAddress(state, action) {
            console.log('修改address的方法', action)
            state.address = action.payload;
        }
    }
})
export const {changeSchoolName: changeSchoolName, changeSchoolAddress: changeSchoolAddress} = schoolSlice.actions;
export const {reducer : schoolReducer} = schoolSlice;
