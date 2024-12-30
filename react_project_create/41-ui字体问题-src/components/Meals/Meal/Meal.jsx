import React from 'react';
import classes from './Meal.module.css';
import Counter from "../../UI/Counter/Counter.jsx";
const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.imgBox}>
                <img src={props.meal.img} alt=""/>
            </div>
            <div className={classes.contentBox}>
                <h2 className={classes.Title}>{ props.meal.title }</h2>
                <p className={classes.desc}>{ props.meal.desc }</p>
                <div className={classes.priceWrapper}>
                    <span className={classes.price}>{ props.meal.price }</span>
                    <Counter  meal={props.meal} />
                </div>
            </div>
        </div>
    );
};

export default Meal;