import React, { FunctionComponent } from 'react';
import ModalDialog from '../ModalDialog';
import CharacterDetailsState from '../../redux/state/CharacterDetailsState';
import CharacterCard from './CharacterCard';
import ProgressBar from '../ProgressBar';
import Alert, { AlertType } from '../Alert';

interface Props {
    isOpen: boolean
    characterDetails: CharacterDetailsState,
    onClose: () => void;
}
const CharacterDetailsDialog: FunctionComponent<Props> = (props: Props) => {

    const { characterDetails, isOpen, onClose } = props;

    return <ModalDialog
        isOpen={isOpen}
        title={(characterDetails.character) ? characterDetails.character.name : ""}
        onClose={onClose}>
        {
            characterDetails.error ?
                <Alert type={AlertType.DANGER} message={characterDetails.error} /> :
                (characterDetails.isFetching ?
                    <ProgressBar
                        progress={characterDetails.fetchingProgressValue}
                        message={characterDetails.fetchingProgressMessage} /> :
                    ((characterDetails.character) ?
                        <CharacterCard character={characterDetails.character} /> : ""))
        }
    </ModalDialog>
};
export default CharacterDetailsDialog;