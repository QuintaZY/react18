import React from 'react';
import Backdrop from "../Backdrop/Backdrop.jsx";
import classes from './Confirm.module.css'

const Confirm = (props) => {
    return (<Backdrop className={classes.confirmOuter}
                      onClick={props.onCancel}>
        <div className={classes.confirm}>
            <p>{props.confirmText}</p>
            <div>
                <button onClick={(e) => props.onCancel(e)}>取消</button>
                <button onClick={(e) => props.onOk(e)}>确认</button>
            </div>
        </div>
    </Backdrop>);
};

export default Confirm;