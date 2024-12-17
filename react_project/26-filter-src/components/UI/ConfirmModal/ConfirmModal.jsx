import React from 'react';
import './ConfirmModal.css'
import Card from "../Card/Card.jsx";
import Backdrop from "../BackDrop/BackDrop.jsx";

const ConfirmModal = (props) => {
    return (
        <Backdrop>
            <Card className={'confirm-modal'}>
                <div className={'confirm-text'}>
                    <p>{props.confirmText}</p>
                </div>
                <div className={'confirm-btn-group'}>
                    <button onClick={props.onCancel} className={'confirm-btn'}>取消</button>
                    <button onClick={props.onConfirm} className={'confirm-btn'}>确定</button>
                </div>
            </Card>
        </Backdrop>
    );
};

export default ConfirmModal;