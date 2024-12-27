import React from 'react';
import classes from './Counter.module.css';


/* 计算器组件 */
const Counter = (props) => {
    return (
        <div className={classes.counter}>
            {
                props.amount > 0 ? (
                    <>
                        <button className={classes.sub}>
                            <span>-</span>
                        </button>
                        <span className={classes.count}>{props.amount}</span>
                    </>
                ) : null
            }
            <button className={classes.add}>
                <span>+</span>
            </button>
        </div>
    );
};

export default Counter;