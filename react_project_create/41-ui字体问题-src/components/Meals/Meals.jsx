import React from 'react';
import Meal from "./Meal/Meal.jsx";
import classes from './Meals.module.css';
const Meals = (props) => {
    return (
        <div className={classes.Meals}>
            { props.mealsData.map(meal => <Meal key={meal.id} meal={meal}  />) }
        </div>
    );
};

export default Meals;