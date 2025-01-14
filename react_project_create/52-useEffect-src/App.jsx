import {Fragment, useEffect, useState} from 'react'
import B from "./B.jsx";

const App = () => {
    console.log('组件重新渲染了')
    const [count, setCount] = useState(0)

    // setTimeout(() => {
    //     setCount(1)
    // }, 0)
    /**
     * 
     * */
    useEffect(() => {
        setCount(1)
        console.log('useEffect')
    })

    return (<div>
        1
        <button onClick={clickHandler}>click</button>
        <B/>
    </div>)
}

export default App