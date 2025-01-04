import React, {useContext} from 'react';
import ReactDOM from "react-dom";
import classes from './Checkout.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const checkoutRoot = document.getElementById('checkout-root')

const Checkout = (props) => {
    return ReactDOM.createPortal(<div className={classes.Checkout}>
        <div className={classes.Close}>
            <FontAwesomeIcon onClick={() => props.onHide()} icon={faXmark}/>
        </div>
        <header className={classes.header}>
            <h2 className={classes.title}>餐品详情</h2>
        </header>
        <div>
            列表
        </div>
        <footer>
            底部
        </footer>

    </div>, checkoutRoot);
};

export default Checkout;