import { Dispatch } from 'redux';
import { StarWarsApi } from '../../api/rest/StarWarsApi';
import CharacterActionTypes from './CharacterActionTypes';
import {
  GetCharactersStartAction,
  GetCharactersSuccessAction,
  GetCharactersFailureAction
} from './GetCharactersActions';
import Character from '../../api/model/Character';


export const getCharactersStart = (): GetCharactersStartAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_START,
    isFetching: true,
  };
}

export const getCharactersSuccess = (results: Character[]): GetCharactersSuccessAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
    characters: results,
    isFetching: false,
  };
}

export const getCharactersFailure = (error: string): GetCharactersFailureAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
    isFetching: false,
    error: error
  };
}

export const getCharacters = () => {

  return (dispatch: Dispatch) => {

    const api: StarWarsApi = new StarWarsApi();

    dispatch(getCharactersStart());
      
    return api
      .getCharacters()
      .then((response) => dispatch(getCharactersSuccess(response.data.results)))
      .catch((error) => dispatch(getCharactersFailure(error)));
  };
};

export const searchCharacters = (term: string) => {

  return (dispatch: Dispatch) => {

    const api: StarWarsApi = new StarWarsApi();

    dispatch(getCharactersStart());
    
    return api
      .searchCharacters(term)
      .then((response) => dispatch(getCharactersSuccess(response.data.results)))
      .catch((error) => dispatch(getCharactersFailure(error)));
  };
};
