import React, {useState} from 'react';
import Card from "../UI/Card/Card.jsx";
import './LogsForm.css'

const LogsForm = (props) => {
    const [inputDate, setInputDate] = useState('')
    const [inputDesc, setInputDesc] = useState('')
    const [inputTime, setInputTime] = useState('')

    const descHandleChange = (event) => {
        setInputDesc(event.target.value)

    }
    const dateHandleChange = (event) => {
        setInputDate(event.target.value)

    }
    const timeHandleChange = (event) => {
        setInputTime(event.target.value)

    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime
        }
        /* 向父组件传递参数 */
        props.onSaveLog(newLog)
        /* 清空表单项 */
        setInputDate('')
        setInputDesc('')
        setInputTime('')
        console.log(newLog)
    }

    // htmlFor是用来绑定label和input的，让label点击的时候，自动聚焦到input上*/
    return (<Card className="logs-form">
        <form onSubmit={formSubmitHandler}>
            <div className={'form-item'}>
                <label htmlFor="date">日期</label>
                <input type="date" id={"date"} value={inputDate} onChange={dateHandleChange}/>
            </div>
            <div className={'form-item'}>
                <label htmlFor="desc">描述</label>
                <input type="text" id="desc" value={inputDesc} onChange={descHandleChange}/>
            </div>
            <div className={'form-item'}>
                <label htmlFor="time">时长</label>
                <input type={"text"} id={"time"} value={inputTime} onChange={timeHandleChange}/>
            </div>
            <div className={'form-btn'}>
                <button type={"submit"}>添加</button>
            </div>
        </form>
    </Card>);
};

export default LogsForm;