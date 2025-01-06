import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import classes from './FilterMeals.module.css';


const FilterMeals = (props) => {
    const [keyword, setKeyword] = React.useState("");

    // 对这个函数做节流处理
    const inputChangeHandler = e => {
        console.log(e.target.value);
        const keyword = e.target.value.trim()
        setKeyword(e.target.value);
        props.onFilter(keyword);
    }

    return (
        <div className={classes.searchBox}>
            <div className={classes.inputBox}>
                <FontAwesomeIcon className={classes.searchIcon} icon={faSearch}/>
                <input onChange={inputChangeHandler} className={classes.inputContainer} type="text" placeholder={'请输入关键字'}/>
            </div>
        </div>
    );
};

export default FilterMeals;