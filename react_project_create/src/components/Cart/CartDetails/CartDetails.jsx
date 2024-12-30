import React, {useContext} from 'react';
import Backdrop from "../../UI/Backdrop/Backdrop.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import classes from './CartDetails.modules.css'
import CartContext from "../../../store/cart-context.js";
import Meal from "../../Meals/Meal/Meal.jsx";

const CartDetails = () => {
    const ctx = useContext(CartContext)

    return (
        <Backdrop>
            <div className={classes.CartDetails}>
                <header className={classes.header}>
                    <h2 className={classes.title}>
                        餐品详情
                    </h2>
                    <div className={classes.clear}>
                        <FontAwesomeIcon icon={faTrash}/>
                        清空购物车
                    </div>
                </header>
                <div className={classes.mealList}>
                    {
                        ctx.items.map(item =>
                            <Meal key={item.id} meal={item} noDesc />
                        )
                    }
                </div>
            </div>
        </Backdrop>
    );
};

export default CartDetails;