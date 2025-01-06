import React, {useContext} from 'react';
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from "../../store/cart-context.js";
import CartDetails from "./CartDetails/CartDetails.jsx";
import Checkout from "./Checkout/Checkout.jsx";


const Cart = () => {
    const ctx = useContext(CartContext)
    /** 控制购物车详情的显示与隐藏 */
    const [showDetails, setShowDetails] = React.useState(false)
    /** 添加一个state设置结账页的显示与隐藏 */
    const [showCheckout, setShowCheckout] = React.useState(false)

    /** 在组件每次重新渲染的时候检查商品数量， 如果数量为0   则修改showDetails 为false */
    React.useEffect(() => {
        if (showDetails) {
            if (ctx.totalAmount === 0) {
                setShowDetails(false)
            }
        }
    }, [ctx.totalAmount])

    /** 添加一个现实详情的函数 */
    const toggleDetailsHandler = () => {
        if (ctx.totalAmount === 0) {
            setShowDetails(false)
            return
        }
        setShowDetails(prevState => !prevState)
    }
    /** 购物车结算 */
    const showCheckoutHandler = () => {
        if (ctx.totalAmount === 0) {
            setShowDetails(false)
            return
        }
        setShowCheckout(true)
        console.log('showCheckoutHandler', showCheckout)
    }

    const hideCheckoutHandler = () => {
        console.log('hideCheckoutHandler', showCheckout)
        setShowCheckout(false)
    }


    return (<div className={classes.cart} onClick={toggleDetailsHandler}>
        {showCheckout && <Checkout onHide={hideCheckoutHandler}/>}

        {/* 引入购物和的详情 */}
        {showDetails && <CartDetails/>}

        <div className={classes.icon}>
            <img src={iconImg} alt={'图标'}/>
            {ctx.totalAmount === 0 ? null : <span className={classes.totalNum}>{ctx.totalAmount}</span>}
        </div>

        {ctx.totalAmount === 0 ? <p className={classes.noMeal}> 未选购商品 </p> :
            <p className={classes.totalPrice}>{ctx.totalPrice}</p>}

        <button className={`${classes.button} ${ctx.totalAmount === 0 ? classes.disabledButton : ''}`}
                onClick={showCheckoutHandler}>去结算
        </button>
    </div>);
};

export default Cart;