import {useState} from 'react'
import classes from './App.module.css'


const App = () => {

    const [showBorder, setShowBorder] = useState(false)
    const clickHandler = () => {
        setShowBorder(!showBorder)
    }

    return (
        <div className={classes.appText}>
            <h1 className={`${classes.h1s} ${showBorder ? classes.border : classes.noBorder}`}>React App</h1>
            <button onClick={clickHandler} >点我一下</button>
        </div>
    )
}

export default App
