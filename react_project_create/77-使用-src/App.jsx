import {Fragment, useEffect, useReducer, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeName, changeAge} from "./store/index.js";

const App = () => {
    const student = useSelector(state => state.student);
    // 通过dispatch获取派发器对象
    const dispatch = useDispatch();
    // 获取修改name的方法

    const handlerChangeName = () => {
        dispatch(changeName('章五'))
    }
    const handlerChangeAge = () => {
        dispatch(changeAge(81))
    }

    return (<div style={{fontSize: '20px'}}>
        <div>
            <p>{student.name} ---</p>
            <p>{student.age} ---</p>
        </div>
        <button onClick={handlerChangeName}>修改Name</button>
        <button onClick={handlerChangeAge}>修改Age</button>
    </div>)
}

export default App