import React, { FunctionComponent } from 'react';
import Character from '../../api/model/Character';
import './CharacterList.css';

interface Props {
  characters: Character[];
  onCharacterSelected: (character: Character) => void
}
const CharacterList: FunctionComponent<Props> = props => {

  const { characters, onCharacterSelected } = props;
  return (
    <ul className="list-group">
      {characters.map(character =>
        <li key={character.name}
          className="list-group-item"
          onClick={() => onCharacterSelected(character)}>
          {character.name}
        </li>
      )}
    </ul>
  );
};

export default CharacterList;
