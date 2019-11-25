import React, { FunctionComponent } from 'react';
import Modal from 'react-bootstrap4-modal';

interface Props {
    title: string,
    isOpen: boolean,
    onClose: () => void;
}
const ModalDialog: FunctionComponent<Props> = (props) => {
    return (
        <Modal dialogClassName="modal-dialog modal-dialog-centered modal-lg" visible={props.isOpen} onClickBackdrop={() => props.onClose()}>
            <div className="modal-header bg-dark text-white">
                <h5 className="modal-title">{props.title}</h5>
                <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={() => props.onClose()}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {props.children}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => props.onClose()}>Close</button>
            </div>
        </Modal>
    );
};
export default ModalDialog;