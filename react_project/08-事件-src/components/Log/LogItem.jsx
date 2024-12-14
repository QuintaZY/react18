import React from 'react';
import MyDate from "./MyDate.jsx";
import './LogItem.css'
const LogItem = () => {
    return (
        <div className="item">
            <MyDate />
            {/*    日志内的容器*/}
            <div className="content">
                <h2 className="desc">学习react</h2>
                <div className="time">学习时间</div>
            </div>
        </div>
    );
};

export default LogItem;