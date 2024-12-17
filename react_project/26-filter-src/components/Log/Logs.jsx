import LogItem from "./LogItem.jsx";
import './Logs.css'
import Card from "../UI/Card/Card.jsx";
import LogFilter from "../UI/LogFilter/LogFilter.jsx";
import {useState} from "react";

const Logs = (props) => {
    /* 创建筛选状态*/
    const [year, setYear] = useState(2023)
    /* 修改年份的函数 */
    const changeYearHandler = e => {
        setYear(e)
    }
    /* 过滤数据 */
    let filterData = props.logsData.filter(item => item.date.getFullYear() === year)

    let logItemDate = filterData.map(item => <LogItem logIndex={item.id} key={item.id} date={item.date}
                                                          desc={item.desc}
                                                          time={item.time} onDelLogs={props.onDelLog}/>)
    if (logItemDate.length === 0) {
        logItemDate = <div>暂无日志</div>
    }
    return <Card className="logs">
        <LogFilter year={year} onYearChenge={changeYearHandler}></LogFilter>
        {
            logItemDate
        }
    </Card>
}

export default Logs