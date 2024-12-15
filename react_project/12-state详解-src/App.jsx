import {useState} from "react";

const App = () => {

    const [count, setCount] = useState(0)
    console.log(count)
    console.log(setCount)
    const handleAdd = () => () => setCount(count + 1)
    const handleSub = () => () => setCount(count - 1)
    return <div>
        <h1>{count}</h1>
        <button style={{width: '100px'}} onClick={handleAdd()}>+</button>
        <button style={{width: '100px', marginLeft: '20px'}} onClick={handleSub()}>-</button>
    </div>
}


export default App