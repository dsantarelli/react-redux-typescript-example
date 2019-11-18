import { Dispatch } from 'redux';
import { StarWarsApi } from '../../api/rest/StarWarsApi';
import {
  GetCharactersListStartAction,
  GetCharactersListSuccessAction,
  GetCharactersListFailureAction,
  CharacterActionTypes
} from './CharactersListActions';
import Character from '../../api/model/Character';


export const getCharactersStart = (): GetCharactersListStartAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_LIST_START,
    isFetching: true,
  };
}

export const getCharactersSuccess = (results: Character[]): GetCharactersListSuccessAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_LIST_SUCCESS,
    characters: results,
    isFetching: false,
  };
}

export const getCharactersFailure = (error: string): GetCharactersListFailureAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_LIST_FAILURE,
    isFetching: false,
    error: error
  };
}

export const getCharacters = () => {  
  return (dispatch: Dispatch) => {    

    dispatch(getCharactersStart());      
    return new StarWarsApi()
      .getCharacters()
      .then((response) => dispatch(getCharactersSuccess(response.data.results)))
      .catch((error) => dispatch(getCharactersFailure('Could not get characters: ' + error.message)));
  };
};

export const searchCharacters = (term: string) => {  
  return (dispatch: Dispatch) => {

    dispatch(getCharactersStart());    
    return new StarWarsApi()
      .searchCharacters(term)
      .then((response) => dispatch(getCharactersSuccess(response.data.results)))
      .catch((error) => dispatch(getCharactersFailure('Could not search for characters: ' + error.message)));
  };
};
