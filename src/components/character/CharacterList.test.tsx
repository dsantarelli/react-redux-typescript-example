import React from 'react';
import { shallow } from 'enzyme';

// Business domain imports
import Character from '../../api/model/Character';
import GetCharactersMock from '../../api/rest/GetCharactersMock';
import CharacterList from './CharacterList';
import CharacterListItem from './CharacterListItem';

describe('CharacterList', () => {

  describe('without characters', () => {

    const characters: Character[] = [];
    const wrapper = shallow(<CharacterList characters={characters} />);

    describe('renders', () => {
      it('empty undordered list', () => {
        const element = <ul className="list-group"></ul>;
        expect(wrapper.contains(element)).toEqual(true);
      });
    });
  });

  describe('with characters', () => {

    const characters: Character[] = GetCharactersMock;
    const wrapper = shallow(<CharacterList characters={characters} />);
    const character: Character = characters[0];

    describe('renders', () => {
      it('a list item per character', () => {
        const element = <CharacterListItem key={character.name} character={character} />;
        expect(wrapper.contains(element)).toEqual(true);
      });
    });
  });
});
