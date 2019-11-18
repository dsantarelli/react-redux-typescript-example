import Character from '../../api/model/Character';

export enum CharacterActionTypes {
  GET_CHARACTERS_LIST_START = 'GET_CHARACTERS_LIST_START',
  GET_CHARACTERS_LIST_SUCCESS = 'GET_CHARACTERS_LIST_SUCCESS',
  GET_CHARACTERS_LIST_FAILURE = 'GET_CHARACTERS_LIST_FAILURE'
}

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
