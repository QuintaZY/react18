import LogItem from "./LogItem.jsx";
import './Logs.css'
import Card from "../UI/Card.jsx";

const Logs = (props) => {



    return <Card className="logs">
        {
            props.logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc}
                                          time={item.time}/>)
        }
    </Card>
}

export default Logs