import React from 'react';
import classes from './Meal.module.css';
const Meal = () => {
    return (
        <div className={classes.Meal}>
            <div className={classes.imgBox}>
                <img src="/img/meals/1.png" alt=""/>
            </div>
            <div>
                <h2 className={classes.Title}>汉堡包</h2>
                <p className={classes.desc}>百分百牛肉 阿萨德的点点滴家属前往年度好滴23</p>
                <div className={classes.priceWrapper}>
                    <span className={classes.price}>12</span>
                    <div>数量</div>
                </div>
            </div>
        </div>
    );
};

export default Meal;