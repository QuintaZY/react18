import {Fragment, useCallback, useEffect, useReducer, useState} from 'react'
import A from "./A.jsx";

const App = () => {
    console.log('APP渲染了')
    const [count, setCount] = useState(1)
    const [num, setNum] = useState(1)
    // const clickHandler = () => {
    //     setCount(prevState => prevState + 1)
    // }
    /*
    * useCallback
    *    参数：
    *       1，回调函数
    *       2，依赖项数组
    *           - 当依赖项数组中的变量发生变化时，回调函数才会执行
    *           - 如果不传递第二个参数，回调函数会每次组件重新渲染时都执行
    * */
    const clickHandler = useCallback(() => {
        setCount(prevState => prevState + num);
        setNum(prevState => num + 1)
    }, [num])
    return (<div>
        <h2>APP --> {count}</h2>
        <button onClick={clickHandler}>增加</button>
        <A onAdd={clickHandler}/>
    </div>)
}

export default App