import React from 'react';
import './MyDate.css'

const MyDate = (props) => {
    console.log('时间',props)
    let month = props.date.toLocaleString('zh-CN', { month: 'long'})
    let day = props.date.getDate()
    return (
        <div className="date">
            <div className="month">
                { month }
            </div>
            <div className="day"> { day }</div>
        </div>
    );
};

export default MyDate;