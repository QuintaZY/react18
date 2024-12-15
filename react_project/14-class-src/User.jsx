import React, {Component} from "react";

class User extends Component {

    state = {
        count: 0,
        test: '哈哈',
        obj: {
            name: 'jack',
            age: 18
        }
    }
    clickHandler = () => {
        // this.setState({count: 10})
        // console.log(this.state.count);
        this.setState({
            obj: {...this.state.obj, name: 'lucy'}
        })
        // this.setState(preState => {
        //     return {count: preState.count + 1}
        // });
    }
    render() {
        /*
        * 类组件的props是只读的，不能修改，但可以修改它的属性值
        * this.props 是一个对象，对象中保存着父组件传递过来的数据
        * 类组件中的state统一存储到实例对象的state中
        *   可以通过this.state获取
        *   通过this.setState()修改
        *       当通过this.setState()修改state的值时,
        *           React只会修改设置了的属性
        * 可以通过this.setState()修改state的值，但修改state的值是异步的，不能直接修改state的值，否则会报错
        * */

        // console.log(this.props);
        return (
            <div>
                <h1>{this.state.count} - {this.state.test}</h1>
                <h2>{this.state.obj.name} - {this.state.obj.age}</h2>
                <button onClick={this.clickHandler}>点我</button>
                <ul>
                    <li>姓名：{this.props.name}</li>
                    <li>年龄：{this.props.age}</li>
                    <li>性别：{this.props.gender}</li>
                </ul>
            </div>
        );
    }
}

export default User;
