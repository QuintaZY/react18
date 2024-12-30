import React, {useContext} from 'react';
import classes from './Cart.module.css'
import iconImg from '../../../public/img/meals/2.png'
import CartContext from "../../store/cart-context.js";


const Cart = () => {
    const ctx = useContext(CartContext)

    return (
        <div className={classes.cart}>
            <div className={classes.icon}>
                <img src={iconImg} alt={'图标'}/>
                <span className={classes.totalNum}>{ ctx.totalAmount }</span>
            </div>

            <p className={classes.totalPrice}>{ ctx.totalPrice }</p>

            <button className={classes.button} >去结算</button>
        </div>
    );
};

export default Cart;