import React from 'react';
import { shallow } from 'enzyme';
import CharacterListContainer from './CharacterListContainer';
import ProgressBar from '../ProgressBar';
import Alert, { AlertType } from '../Alert';
import CharacterList from './CharacterList';
import GetCharactersMock from '../../api/rest/GetCharactersMock';
import { act } from 'react-test-renderer';

describe('CharacterListContainer should render', () => {

    it("a progress bar if it's fetching data", () => {

        const wrapper = shallow(<CharacterListContainer
            onCharacterSelected={() => { }}
            charactersList={{ isFetching: true, characters: [] }} />)

        expect(wrapper.getElements().length).toBe(1);
        expect(wrapper.find(ProgressBar).length).toBe(1);
        expect(wrapper.find(Alert).length).toBe(0);
        expect(wrapper.find(CharacterList).length).toBe(0);
    });

    it("an alert if there is an error", () => {

        const wrapper = shallow(<CharacterListContainer
            onCharacterSelected={() => { }}
            charactersList={{ isFetching: false, characters: [], error: 'Error' }} />)

        expect(wrapper.getElements().length).toBe(1);
        expect(wrapper.find(ProgressBar).length).toBe(0);
        expect(wrapper.find(Alert).length).toBe(1);
        expect(wrapper.find(CharacterList).length).toBe(0);
        expect(wrapper.find(Alert).props().type).toBe(AlertType.DANGER);
        expect(wrapper.find(Alert).props().message).toBe('Error');
    });

    it("a message if no characters have been found", () => {

        const wrapper = shallow(<CharacterListContainer
            onCharacterSelected={() => { }}
            charactersList={{ isFetching: false, characters: [] }} />)

        expect(wrapper.getElements().length).toBe(1);
        expect(wrapper.find(ProgressBar).length).toBe(0);
        expect(wrapper.find(Alert).length).toBe(0);
        expect(wrapper.find(CharacterList).length).toBe(0);
        expect(wrapper.text().includes("No characters found.")).toBe(true);
    });

    it("the character list if some characters have been found", () => {

        const onCharacterSelectedMock = jest.fn();
        const wrapper = shallow(<CharacterListContainer
            onCharacterSelected={onCharacterSelectedMock}
            charactersList={{ isFetching: false, characters: GetCharactersMock }} />)

        expect(wrapper.getElements().length).toBe(1);
        expect(wrapper.find(ProgressBar).length).toBe(0);
        expect(wrapper.find(Alert).length).toBe(0);

        const characterListWrapper = wrapper.find(CharacterList);
        expect(characterListWrapper.length).toBe(1);
        expect(characterListWrapper.props().characters).toBe(GetCharactersMock);

        act(() => characterListWrapper.props().onCharacterSelected(GetCharactersMock[0]));
        expect(onCharacterSelectedMock).toHaveBeenCalled();
    });
});