import {Fragment, useState} from 'react'
import B from "./B.jsx";

const App = () => {
    console.log('组件重新渲染了')
    const [count, setCount] = useState(0)

    /**
     * 这里会报错，因为 setCount 是一个异步函数，不能在同步代码中调用
     * 它会导致死循环
     * 因为setState() 的执行流程
     * 1，dispatchSetDate()
     *  -> 这里会判断当前处于什么阶段。
     *    -> 渲染阶段：不会检查state是否有变化，直接返回
     *    -> 提交阶段：会检查state是否有变化，如果有变化，会重新渲染。如果没有变化，不会重新渲染
     * */
    // setCount(0)

    /**
     *  count 0
     *  第一次点击，count 1
     *    打印 组件重新渲染了。点击了
     *  第二次点击，count 1
     *    第一次是1，第二次是1，重新执行了一次
     *  第三次点击，count 1
     *    没有打印 组件重新渲染了
     *  为什么？
     *  这种情况发生在第一次值相同的时候，组件会重新渲染， 后续相同的比较是不会重新渲染的
     *  */
    const clickHandler = () => {
        console.log('点击了')
        setCount(1)
    }
    return (<div>
        1
        <button onClick={clickHandler}>click</button>
        <B/>
    </div>)
}

export default App