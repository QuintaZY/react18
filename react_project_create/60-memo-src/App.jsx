import {Fragment, useEffect, useReducer, useState} from 'react'
import B from "./B.jsx";
import A from "./A.jsx";

const App = () => {
    console.log('APP渲染了')
    const [count, setCount] = useState(0)

    const clickHandler = () => {
        setCount(prevState => prevState + 1)
    }
    return (<div>
        <h2>APP --> {count}</h2>
        <button onClick={clickHandler}>增加</button>
        <A/>
        <B/>
    </div>)
}

export default App