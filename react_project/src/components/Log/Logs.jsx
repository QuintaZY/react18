import LogItem from "./LogItem.jsx";
import './Logs.css'

const Logs = () => {
    return <div className="logs">
        <LogItem date={new Date(2024, 5, 1,2,30)} desc={"学习"} time={"30"} />
        <LogItem date={new Date()} desc={"学习"} time={"30"} />
    </div>
}

export default Logs