import {Component} from "react";
import User from "./User.jsx";

class App extends Component {



    render() {
        return (
            <div className={'App'}>
                <User name={'猪八戒'} age={28} gender={"男"} />
            </div>
        )
    }
}

export default App