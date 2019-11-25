import Character from '../../api/model/Character';
import CharacterDetails from '../../api/model/CharacterDetails';

export enum CharacterActionTypes {

  GET_CHARACTERS_LIST_START = 'GET_CHARACTERS_LIST_START',
  GET_CHARACTERS_LIST_SUCCESS = 'GET_CHARACTERS_LIST_SUCCESS',
  GET_CHARACTERS_LIST_FAILURE = 'GET_CHARACTERS_LIST_FAILURE',

  GET_CHARACTER_DETAILS_START = 'GET_CHARACTER_DETAILS_START',
  GET_CHARACTER_DETAILS_PROGRESS = 'GET_CHARACTER_DETAILS_PROGRESS',
  GET_CHARACTER_DETAILS_SUCCESS = 'GET_CHARACTER_DETAILS_SUCCESS',
  GET_CHARACTER_DETAILS_FAILURE = 'GET_CHARACTER_DETAILS_FAILURE'
}

export interface GetCharactersListStartAction {
  type: CharacterActionTypes.GET_CHARACTERS_LIST_START,
}

export interface GetCharactersListSuccessAction {
  type: CharacterActionTypes.GET_CHARACTERS_LIST_SUCCESS,
  characters: Character[]
}

export interface GetCharactersListFailureAction {
  type: CharacterActionTypes.GET_CHARACTERS_LIST_FAILURE,
  error: string
}

export interface GetCharacterDetailsStartAction {
  type: CharacterActionTypes.GET_CHARACTER_DETAILS_START,
  characterId: number,
  characterName: string
}

export interface GetCharacterDetailsSuccessAction {
  type: CharacterActionTypes.GET_CHARACTER_DETAILS_SUCCESS,
  characterDetails: CharacterDetails
}

export interface GetCharacterDetailsProgressAction {
  type: CharacterActionTypes.GET_CHARACTER_DETAILS_PROGRESS,
  value: number,
  message: string
}

export interface GetCharacterDetailsFailureAction {
  type: CharacterActionTypes.GET_CHARACTER_DETAILS_FAILURE,
  error: string
}

export type CharactersListActions =
  GetCharactersListStartAction
  | GetCharactersListSuccessAction
  | GetCharactersListFailureAction;

export type CharacterDetailsActions =
  GetCharacterDetailsStartAction
  | GetCharacterDetailsProgressAction
  | GetCharacterDetailsSuccessAction
  | GetCharacterDetailsFailureAction;