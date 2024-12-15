import React from 'react';
import Card from "../UI/Card.jsx";
import './LogsForm.css'

const LogsForm = () => {

    /*
    * 获取用户输入
    * */




    // htmlFor是用来绑定label和input的，让label点击的时候，自动聚焦到input上*/
    return (
        <Card className="logs-form">
            <form>
                <div className={'form-item'}>
                    <label htmlFor="date">日期</label>
                    <input type="date" id={"date"}/>
                </div>
                <div className={'form-item'}>
                    <label htmlFor="desc">描述</label>
                    <input type="text" id="desc"/>
                </div>
                <div className={'form-item'}>
                    <label htmlFor="time">时长</label>
                    <input type={"text"} id={"time"}/>
                </div>
                <div className={'form-btn'}>
                    <button>添加</button>
                </div>
            </form>
        </Card>
    );
};

export default LogsForm;