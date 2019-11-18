import React, { FunctionComponent } from 'react';
import Character from '../../api/model/Character';

interface Props {
  character: Character;
}
const CharacterListItem: FunctionComponent<Props> = props => {
  const { character } = props;
  return (
    <li key={character.name} className="list-group-item">
      {character.name}
    </li>
  );
};

export default CharacterListItem;
