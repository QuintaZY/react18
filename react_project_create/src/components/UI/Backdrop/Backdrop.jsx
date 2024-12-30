import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Backdrop.css'

const backDropRoot = document.getElementById('backdrop-root')

const Backdrop = (props) => {
    return ReactDOM.createPortal(
        <div className={`${classes.Backdrop} ${props.className}`}>
            { props.children }
        </div>, backDropRoot
    )
};

export default Backdrop;