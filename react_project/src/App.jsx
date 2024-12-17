import React, {useState} from 'react';
import Logs from "./components/Log/Logs.jsx";
import Card from "./components/UI/Card/Card.jsx";
import LogsForm from "./components/LogsForm/LogsForm.jsx";
import './App.css'
import ConfirmModal from "./components/UI/ConfirmModal/ConfirmModal.jsx";
import BackDrop from "./components/UI/BackDrop/BackDrop.jsx";

const App = () => {
    const [logsData, setLogsData] = useState([
        {id: 1, date: new Date(2024, 2, 1, 2, 30), desc: "学习", time: "30"},
        {id: 2, date: new Date(2024, 6, 24, 3, 10), desc: "学da", time: "10"},
        {id: 3, date: new Date(2024, 7, 30, 3, 500), desc: "学da", time: "11"},
        {id: 4, date: new Date(2023, 7, 30, 3, 500), desc: "学da", time: "11"},
        {id: 5, date: new Date(2022, 8, 10, 2, 500), desc: "学daadwe", time: "11"}
    ])
    const onSaveLogHandler = (newLog) => {
        newLog.id = Date.now() + '';
        setLogsData([newLog, ...logsData])
    }
    /* 删除函数 */
    const onDeleteLogHandler = (id) => {
        setLogsData(logsData.filter(item => item.id !== id))
    }
    return (
        <div className="app">
            {/*<ConfirmModal/>*/}
            <LogsForm onSaveLog={onSaveLogHandler}/>
            <Logs logsData={logsData} onDelLog={onDeleteLogHandler} />
        </div>
    );
};

export default App;
