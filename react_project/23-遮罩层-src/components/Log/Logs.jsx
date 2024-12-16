import LogItem from "./LogItem.jsx";
import './Logs.css'
import Card from "../UI/Card/Card.jsx";

const Logs = (props) => {
    let logItemDate = props.logsData.map(item => <LogItem logIndex={item.id} key={item.id} date={item.date}
                                                          desc={item.desc}
                                                          time={item.time} onDelLogs={props.onDelLog}/>)
    if (logItemDate.length === 0) {
        logItemDate = <div>暂无日志</div>
    }
    return <Card className="logs">
        {
            logItemDate
        }
    </Card>
}

export default Logs