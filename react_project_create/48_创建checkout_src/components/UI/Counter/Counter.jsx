import React, {useContext} from 'react';
import classes from './Counter.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context.js";

/* 计算器组件 */
const Counter = (props) => {
    // 使用context
    const cartCtx = useContext(CartContext);

    // 添加购物车的函数
    const addButtonHandler = () => {
        cartCtx.addItem(props.meal);
    }
    // 减少购物车的函数
    const subButtonHandler = () => {
        cartCtx.removeItem(props.meal);
    }

    return (<div className={classes.counter}>
        {props.meal.amount > 0 ? (<>
            <button className={classes.sub} onClick={subButtonHandler}>
                <FontAwesomeIcon icon={faMinus}/>
            </button>
            <span className={classes.count}>{props.meal.amount}</span>
        </>) : null}
        <button className={classes.add} onClick={addButtonHandler}>
            <FontAwesomeIcon icon={faPlus}/>
        </button>
    </div>);
};

export default Counter;