import React, {useContext, useState} from 'react';
import Backdrop from "../../UI/Backdrop/Backdrop.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import classes from './CartDetails.module.css'
import CartContext from "../../../store/cart-context.js";
import Meal from "../../Meals/Meal/Meal.jsx";
import Confirm from "../../UI/Confirm/Confirm.jsx";

const CartDetails = () => {

    const ctx = useContext(CartContext)
    /** 设置state控制确认框显示 */
    const [showConfirm, setShowConfirm] = useState(false)
    /** 函数显示确认窗口 */
    const showConfirmHandler = () => {
        setShowConfirm(true)
    }
    const cancelHandler = (e) => {
        e.stopPropagation();
        setShowConfirm(false)
    }
    const okHandler = () => {
        // 清空购物车
        ctx.clearCart();
    }

    return (<Backdrop >

        {showConfirm && <Confirm
            onCancel={cancelHandler}
            onOk={okHandler}
            confirmText={'确认删除？该操作不可恢复'}/>}

        <div className={classes.CartDetails} onClick={e => e.stopPropagation()}>
            <header className={classes.header}>
                <h2 className={classes.title}>
                    餐品详情
                </h2>
                <div onClick={showConfirmHandler} className={classes.clear}>
                    <FontAwesomeIcon icon={faTrash}/>
                    清空购物车
                </div>
            </header>
            <div className={classes.mealList}>
                {ctx.items.map(item => <Meal key={item.id} meal={item} noDesc/>)}
            </div>
        </div>
    </Backdrop>);
};

export default CartDetails;