import {Fragment, useEffect, useState} from 'react'
import B from "./B.jsx";

const App = () => {
    console.log('组件重新渲染了')
    const [count, setCount] = useState(0)

    // setTimeout(() => {
    //     setCount(1)
    // }, 0)
    /**
     *  可以指定一个函数作为 useEffect 的返回值，这个函数会在组件卸载时执行。
     *  ->通常在 useEffect 中返回一个函数，这个函数会在组件卸载时执行，用于清理一些资源，如定时器、事件监听等。
     *  ->如果返回一个函数，这个函数会在组件卸载时执行，用于清理一些资源，如定时器、事件监听等。
     * */
    useEffect(() => {
        return () => {
            console.log('组件卸载了')
        }
    }, [count])

    return (<div>
        1
        <button onClick={clickHandler}>click</button>
        <B/>
    </div>)
}

export default App