import ReactDom from 'react-dom/client'
import './index.css'
const App = <div className="logs">
    {/* 日志项目 */}
    <div className="item">
        {/*{ 日期 }*/}
        <div className="date">
            <div className="month">
                四月
            </div>
            <div className="day"> 13</div>
        </div>
        {/*    日志内的容器*/}
        <div className="content">
            <h2>学习react</h2>
            <div className="time">学习时间</div>
        </div>
    </div>
</div>

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(App)