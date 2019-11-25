import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ModalDialog from './ModalDialog'
import Modal from 'react-bootstrap4-modal';
import { act } from 'react-test-renderer';

describe('ModalDialog', () => {

    let onCloseMock: jest.Mock;
    let modalDialog: ShallowWrapper;

    beforeEach(() => {
        onCloseMock = jest.fn();
        modalDialog = shallow(<ModalDialog title="Luke" isOpen={true} onClose={onCloseMock} />);
    });

    it('should have a title', () => expect(modalDialog.find('.modal-title').text()).toBe('Luke'));
    it('should be visible', () => expect(modalDialog.find(Modal).props().visible).toBe(true));

    describe('should be closed when', () => {

        let onCloseMock: jest.Mock;
        let modalDialog: ShallowWrapper;
        beforeEach(() => {
            onCloseMock = jest.fn();
            modalDialog = shallow(<ModalDialog title="Luke" isOpen={true} onClose={onCloseMock} />);
        });

        it('clicking on header close button', () => {
            act(() => { modalDialog.find('.modal-header').find('button').simulate('click') });
            expect(onCloseMock).toHaveBeenCalled();
        });

        it('clicking on footer close button', () => {
            act(() => { modalDialog.find('.modal-footer').find('button').simulate('click') });
            expect(onCloseMock).toHaveBeenCalled();
        });

        it('clicking on backdrop', () => {
            act(() => { (modalDialog.find(Modal).props() as any).onClickBackdrop(); });
            expect(onCloseMock).toHaveBeenCalled();
        });
    });
});