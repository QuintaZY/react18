import React from 'react';
import MyDate from "./MyDate.jsx";
import './LogItem.css'
import Card from "../UI/Card/Card.jsx";

const LogItem = (props) => {
    const deleteHandler = () => {
        const isConfirm = confirm('确定删除吗？')
        if (isConfirm) {
            /* 删除当前的item */
            props.onDelLogs(props.logIndex)
        }
    }
    return (
        <Card className="item">
            <MyDate date={props.date}/>
            {/*    日志内的容器*/}
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time}</div>
            </div>
            {/*删除*/}
            <div onClick={deleteHandler}>
                <div className={'delete'}>x</div>
            </div>
        </Card>
    );
};

export default LogItem;