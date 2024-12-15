import {useRef, useState} from "react";

const App = () => {
    const h1ref = useRef()
    const header = document.getElementById('header')
    const handleAdd = () => {
        h1ref.current.innerText = 'red'
    }



    return <div >
        <h1 ref={h1ref} id='header'>我是标题</h1>
        <button style={{width: '100px'}} onClick={handleAdd()}>+</button>
        {/*<button style={{width: '100px', marginLeft: '20px'}} onClick={handleSub()}>-</button>*/}
    </div>
}


export default App