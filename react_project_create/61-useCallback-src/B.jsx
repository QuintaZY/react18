import React from 'react';

const B = (props) => {
    console.log('b组件,重新渲染了')
    return (
        <div style={{fontSize: '50px'}}>
            b组件
            <p>{props.test}</p>
        </div>
    );
};
/**
 *   React.memo 是一个高阶组件
 *     它接收一个组件作为参数，返回一个新的组件
 *     包装过的组件就会具有缓存功能
 *       只有props发生变化才会重新渲染。否则总是返回缓存的结果
 *     */
export default React.memo(B);