import React from 'react';
import './ConfirmModal.css'
import Card from "../Card/Card.jsx";
const ConfirmModal = () => {
    return (
        <Card className={'confirm-modal'}>
            <div className={'confirm-text'}>
                <p>确认删除？该操作不可恢复</p>
            </div>
            <div className={'confirm-btn-group'}>
                <button className={'confirm-btn'}>取消</button>
                <button className={'confirm-btn'}>确定</button>
            </div>
        </Card>
    );
};

export default ConfirmModal;