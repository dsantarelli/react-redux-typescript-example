import React from 'react';
import { shallow } from 'enzyme';

import ICharacter from '../../api/model/Character';
import GetCharactersMock from '../../api/rest/GetCharactersMock';
import CharacterListItem from './CharacterListItem';

describe('CharacterListItem', () => {

  const character: ICharacter = GetCharactersMock[0];
  const wrapper = shallow(<CharacterListItem key={character.name} character={character} />);

  describe('renders', () => {
    it('a list item', () => {
      const element = <li key='Luke Skywalker' className='list-group-item'>Luke Skywalker</li>;
      expect(wrapper.contains(element)).toEqual(true);
    });
  });
});
