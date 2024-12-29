import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import classes from './FilterMeals.module.css';


const FilterMeals = () => {
    return (
        <div className={classes.searchBox}>
            <div className={classes.inputBox}>
                <FontAwesomeIcon className={classes.searchIcon} icon={faSearch}/>
                <input className={classes.inputContainer} type="text" placeholder={'请输入关键字'}/>
            </div>
        </div>
    );
};

export default FilterMeals;