import Character from '../../api/model/Character';
import CharacterActionTypes from './CharacterActionTypes';

export interface GetCharactersStartAction {
  type: CharacterActionTypes.GET_CHARACTERS_START,
  isFetching: true
}

export interface GetCharactersSuccessAction {
  type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
  characters: Character[],
  isFetching: false
}

export interface GetCharactersFailureAction {
  type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
  isFetching: false,
  error: string
}
