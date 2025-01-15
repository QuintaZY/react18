import {Fragment, useEffect, useState} from 'react'
import B from "./B.jsx";

const App = () => {
    console.log('组件重新渲染了')
    const [count, setCount] = useState(0)

    // setTimeout(() => {
    //     setCount(1)
    // }, 0)
    /**
     * useEffect 的第二个参数是一个数组，数组中可以写入多个变量，当数组中的变量发生变化时，useEffect 才会执行
     * 通常会将Effect中使用的变量设置为依赖项
     *  ->如果不传递第二个参数，useEffect 会在每次组件重新渲染时都执行
     *  ->如果第二次参数是一个空数组，useEffect 只会在组件挂载和卸载时执行
     * */
    useEffect(() => {
        setCount(1)
        console.log('useEffect')
    }, [count])

    return (<div>
        1
        <button onClick={clickHandler}>click</button>
        <B/>
    </div>)
}

export default App