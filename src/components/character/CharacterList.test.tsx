import React from 'react';
import { shallow } from 'enzyme';

// Business domain imports
import Character from '../../api/model/Character';
import GetCharactersMock from '../../api/rest/GetCharactersMock';
import CharacterList from './CharacterList';
import { act } from 'react-test-renderer';

describe('CharacterList', () => {

  describe('without characters', () => {

    const characters: Character[] = [];
    const wrapper = shallow(<CharacterList characters={characters} onCharacterSelected={() => {}} />);

    describe('renders', () => {
      it('empty undordered list', () => {
        const element = <ul className="list-group"></ul>;
        expect(wrapper.contains(element)).toEqual(true);
      });
    });
  });

  describe('with characters', () => {

    const onClickMock = jest.fn();
    const characters: Character[] = GetCharactersMock;
    const wrapper = shallow(<CharacterList characters={characters} onCharacterSelected={onClickMock} />);
    const character: Character = characters[0];

    describe('renders', () => {
      it('a list item per character', () => {
        const item = wrapper.find('.list-group-item');        
        expect(item.length).toEqual(1);
        expect(item.text()).toEqual(character.name);       
        expect(item.props().onClick).toBeDefined();
        act(() => { item.simulate('click'); });
        expect(onClickMock).toHaveBeenCalled();
      });    
    });
  });
});
