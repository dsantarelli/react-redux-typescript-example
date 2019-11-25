import React, { FunctionComponent } from 'react';
import CharactersListState from '../../redux/state/CharactersListState';
import ProgressBar from '../ProgressBar';
import Alert, { AlertType } from '../Alert';
import CharacterList from './CharacterList';
import Character from '../../api/model/Character';

interface Props {
    charactersList: CharactersListState,
    onCharacterSelected(character: Character): void
}
const CharacterListContainer: FunctionComponent<Props> = (props: Props) => {

    const { charactersList, onCharacterSelected } = props;

    if (charactersList.isFetching) {
        return <ProgressBar />
    }
    else {
        if (charactersList.error) {
            return <Alert type={AlertType.DANGER} message={charactersList.error} />
        }
        else {
            return charactersList.characters.length === 0 ?
                <div className="p-2">
                    <span className="font-italic">No characters found.</span>&nbsp;
                    <span role="img" aria-label="doh!">😓</span>
                </div> :
                <CharacterList
                    characters={charactersList.characters}
                    onCharacterSelected={(c) => onCharacterSelected(c)} />
        }
    }
}
export default CharacterListContainer;