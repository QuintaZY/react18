import React from 'react';
import B from "./B.jsx";

const A = (props) => {
    const [count, setCount] = React.useState(1);
    const clickHandler = () => {
        setCount(prevState => prevState + 1);
    };


    const test = count % 4 === 0;
    return (
        <div>
            <h2>A组件 --> {count}</h2>
            <button onClick={clickHandler}>A组件增加</button>
            <button onClick={props.onAdd}>APP组件</button>
            <B test={test}/>
        </div>
    )
        ;
};

export default React.memo(A);