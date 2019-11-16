import React from 'react';
import Character from '../../api/model/Character';
import CharacterListItem from './CharacterListItem';

interface Props {
  characters: Character[];
}

const CharacterList: React.FunctionComponent<Props> = props => {
  const { characters } = props;

  return (
    <ul className="list-group">
      {characters && characters.map(character => {
        return (
          <CharacterListItem key={character.name} character={character} />
        );
      })}
    </ul>
  );
};

export default CharacterList;
