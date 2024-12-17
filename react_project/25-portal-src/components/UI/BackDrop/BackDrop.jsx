import React from 'react';
import './BackDrop.css'
import ReactDom from "react-dom";

const backdropRoot = document.getElementById('backdrop-root')


const Backdrop = (props) => {
    return ReactDom.createPortal(
        (
            <div className={'backdrop'}>
                {props.children}
            </div>
        )
        , backdropRoot);
};

export default Backdrop;