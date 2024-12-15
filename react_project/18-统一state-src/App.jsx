import React from 'react';
import Logs from "./components/Log/Logs.jsx";
import Card from "./components/UI/Card.jsx";
import LogsForm from "./components/LogsForm/LogsForm.jsx";
import './App.css'

const App = () => {
    return (
        <div className="app">
            <LogsForm/>
            <Logs/>
        </div>
    );
};

export default App;