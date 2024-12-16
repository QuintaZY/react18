import React from 'react';
import MyDate from "./MyDate.jsx";
import './LogItem.css'
import Card from "../UI/Card/Card.jsx";
import ConfirmModal from "../UI/ConfirmModal/ConfirmModal.jsx";

const LogItem = (props) => {
    const [showConfirm, setShowConfirm] = React.useState(false)
    const deleteHandler = () => {
        setShowConfirm(true)
        // const isConfirm = confirm('确定删除吗？')
        // if (isConfirm) {
        //     /* 删除当前的item */
        //     props.onDelLogs(props.logIndex)
        // }
    }
    /* 取消函数 */
    const cancelHandler = () => {
        setShowConfirm(false)
    }
    /* 弹窗确认 */
    const confirmHandler = () => {
        setShowConfirm(false)
        props.onDelLogs(props.logIndex)
    }
    return (
        <Card className="item">
            {showConfirm && <ConfirmModal onConfirm={confirmHandler} onCancel={cancelHandler}
                                          confirmText={'确认删除？该操作不可恢复'}/>}
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