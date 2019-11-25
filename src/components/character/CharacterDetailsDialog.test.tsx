import React from 'react';
import { shallow } from 'enzyme';
import CharacterDetailsDialog from './CharacterDetailsDialog';
import ModalDialog from '../ModalDialog';
import ProgressBar from '../ProgressBar';
import Alert, { AlertType } from '../Alert';
import GetCharacterDetailsMock from '../../api/rest/GetCharacterDetailsMock';
import CharacterCard from './CharacterCard';
import { act } from 'react-test-renderer';

describe('CharacterDetailsDialog', () => {

    describe('should render', () => {

        it('a open dialog', () => {
            const characterDetails = { isFetching: true };
            const wrapper = shallow(<CharacterDetailsDialog isOpen={true} characterDetails={characterDetails} onClose={jest.fn()} />);
            expect(wrapper.find(ModalDialog).props().isOpen).toBe(true);
        });

        it('a dialog that can be closed', () => {
            const onCloseMock = jest.fn();
            const characterDetails = { isFetching: true };
            const wrapper = shallow(<CharacterDetailsDialog isOpen={true} characterDetails={characterDetails} onClose={onCloseMock} />);
            act(() => wrapper.find(ModalDialog).props().onClose());
            expect(onCloseMock).toHaveBeenCalled();
        });

        it('a fetching open dialog', () => {

            const characterDetails = {
                isFetching: true,
                fetchingProgressValue: 50,
                fetchingProgressMessage: 'Message'
            };
            const wrapper = shallow(<CharacterDetailsDialog isOpen={true} characterDetails={characterDetails} onClose={jest.fn()} />);
            const dialog = wrapper.find(ModalDialog);
            const progressBar = dialog.find(ProgressBar);
            expect(progressBar.props().message).toBe('Message');
            expect(progressBar.props().progress).toBe(50);
        });

        it('an error', () => {

            const characterDetails = {
                isFetching: false,
                error: 'Error'
            };
            const wrapper = shallow(<CharacterDetailsDialog isOpen={true} characterDetails={characterDetails} onClose={jest.fn()} />);
            const dialog = wrapper.find(ModalDialog);
            const alert = dialog.find(Alert);
            expect(alert.props().message).toBe('Error');
            expect(alert.props().type).toBe(AlertType.DANGER);
        });

        it('the character details', () => {

            const characterDetails = {
                isFetching: false,
                character: GetCharacterDetailsMock[0]
            };
            const wrapper = shallow(<CharacterDetailsDialog isOpen={true} characterDetails={characterDetails} onClose={jest.fn()} />);
            const dialog = wrapper.find(ModalDialog);
            const characterCard = dialog.find(CharacterCard);
            expect(dialog.props().title).toBe(characterDetails.character.name);
            expect(characterCard.props().character).toBe(characterDetails.character);
        });
    });
});