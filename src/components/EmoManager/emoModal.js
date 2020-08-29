import React, { Component } from 'react';
import ReactModal from "react-modal";
import EmotionForm from './emotionForm';

ReactModal.setAppElement('.app-wrapper');

export default class EmoModal extends Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: '50%',
                left: '50%',
                bottom: 'auto',
                right: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                height: '60vh',
                width: '60vw'
            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.2)"
            }
        };
    }
    
    render() {
        return (
            <ReactModal 
                style={this.customStyles}
                onRequestClose={() => {
                    this.props.handleModalClose();
                }}
                isOpen={this.props.modalIsOpen}
            >
                <EmotionForm />
            </ReactModal>    
        );
    }
}