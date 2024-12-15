import React, {useState} from 'react';
import Card from "../UI/Card.jsx";
import './LogsForm.css'

const LogsForm = () => {
    // const [inputDate, setInputDate] = useState('')
    // const [inputDesc, setInputDesc] = useState('')
    // const [inputTime, setInputTime] = useState('')
    const [formData, setFormData] = useState({
        inputDesc: '',
        inputDate: '',
        inputTime: ''
    })

    const descHandleChange = (event) => {
        // setInputDesc(event.target.value)
        setFormData({
            ...formData,
            inputDesc: event.target.value
        })
    }
    const dateHandleChange = (event) => {
        // setInputDate(event.target.value)
        setFormData({
            ...formData,
            inputDate: event.target.value
        })
    }
    const timeHandleChange = (event) => {
        // setInputTime(event.target.value)
        setFormData({
            ...formData,
            inputTime: event.target.value
        })
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        // const newLog = {
        //     date: new Date(inputDate),
        //     desc: inputDesc,
        //     time: +inputTime
        // }
        // console.log(newLog)
    }


    // htmlFor是用来绑定label和input的，让label点击的时候，自动聚焦到input上*/
    return (<Card className="logs-form">
        <form onSubmit={formSubmitHandler}>
            <div className={'form-item'}>
                <label htmlFor="date">日期</label>
                <input type="date" id={"date"} onChange={dateHandleChange}/>
            </div>
            <div className={'form-item'}>
                <label htmlFor="desc">描述</label>
                <input type="text" id="desc" onChange={descHandleChange}/>
            </div>
            <div className={'form-item'}>
                <label htmlFor="time">时长</label>
                <input type={"text"} id={"time"} onChange={timeHandleChange}/>
            </div>
            <div className={'form-btn'}>
                <button type={"submit"}>添加</button>
            </div>
        </form>
    </Card>);
};

export default LogsForm;