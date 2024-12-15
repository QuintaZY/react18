import LogItem from "./LogItem.jsx";
import './Logs.css'
import Card from "../UI/Card.jsx";

const Logs = (props) => {
    const logItemDate = props.logsData.map(item => <LogItem logIndex={item.id} key={item.id} date={item.date}
                                                            desc={item.desc}
                                                            time={item.time} onDelLogs={props.onDelLog}/>)
    return <Card className="logs">
        {
            props.logsData.length > 0 ? logItemDate
                : <div>暂无日志</div>
        }
    </Card>
}

export default Logs