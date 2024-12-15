import React from 'react';
import Card from "../UI/Card.jsx";
import './LogsForm.css'

const LogsForm = () => {
    const descHandleChange = (event) => {

    }
    const dateHandleChange = (event) => {

    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
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
                <input type={"text"} id={"time"}/>
            </div>
            <div className={'form-btn'}>
                <button type={"submit"}>添加</button>
            </div>
        </form>
    </Card>);
};

export default LogsForm;