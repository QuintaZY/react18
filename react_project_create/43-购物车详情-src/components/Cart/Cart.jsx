import React, {useContext} from 'react';
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from "../../store/cart-context.js";
import CartDetails from "./CartDetails/CartDetails.jsx";


const Cart = () => {
    const ctx = useContext(CartContext)

    return (<div className={classes.cart}>
        {/* 引入购物和的详情 */}
        <CartDetails/>

        <div className={classes.icon}>
            <img src={iconImg} alt={'图标'}/>
            {ctx.totalAmount === 0 ? null : <span className={classes.totalNum}>{ctx.totalAmount}</span>}
        </div>

        {ctx.totalAmount === 0 ? <p className={classes.noMeal}> 未选购商品 </p> :
            <p className={classes.totalPrice}>{ctx.totalPrice}</p>}

        <button className={`${classes.button} ${ctx.totalAmount === 0 ? classes.disabledButton : ''}`}>去结算
        </button>
    </div>);
};

export default Cart;