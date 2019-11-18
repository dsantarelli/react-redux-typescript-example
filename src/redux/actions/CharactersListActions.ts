import Character from '../../api/model/Character';
import CharacterActionTypes from './CharactersListActionTypes';

export interface GetCharactersListStartAction {
  type: CharacterActionTypes.GET_CHARACTERS_LIST_START,
  isFetching: true
}

export interface GetCharactersListSuccessAction {
  type: CharacterActionTypes.GET_CHARACTERS_LIST_SUCCESS,
  characters: Character[],
  isFetching: false
}

export interface GetCharactersListFailureAction {
  type: CharacterActionTypes.GET_CHARACTERS_LIST_FAILURE,
  isFetching: false,
  error: string
}

// Combine the action types with a union
type CharactersListActions = 
  GetCharactersListStartAction
  | GetCharactersListSuccessAction
  | GetCharactersListFailureAction;

export default CharactersListActions;
