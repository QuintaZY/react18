import React from 'react';

const LogFilter = (props) => {
    const changeHandler = e => {
        // props.onFilter(e.target.value);
        props.onYearChenge(+e.target.value)
    }

    return (
        <div style={{marginBottom: '20px'}}>
            年份筛选：<select onChange={changeHandler} defaultValue={props.year}>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
            <option value={2023}>2023</option>
        </select>
        </div>
    );
};

export default LogFilter;