import LogItem from "./LogItem.jsx";
import './Logs.css'
import Card from "../UI/Card.jsx";

const Logs = () => {

    const logsData = [
        {id: 1, date: new Date(2024, 2, 1, 2, 30), desc: "学习", time: "30"},
        {id: 2, date: new Date(2024, 6, 24, 3, 10), desc: "学da", time: "10"},
        {id: 3, date: new Date(2024, 7, 30, 3, 500), desc: "学da", time: "10"}
    ]

    return <Card className="logs">
        {
            logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc}
                                          time={item.time}/>)
        }
    </Card>
}

export default Logs