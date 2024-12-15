import React from 'react';
import MyDate from "./MyDate.jsx";
import './LogItem.css'
import Card from "../UI/Card.jsx";
const LogItem = (props) => {
    return (
        <Card className="item">
            <MyDate date={props.date} />
            {/*    日志内的容器*/}
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time}</div>
            </div>
        </Card>
    );
};

export default LogItem;