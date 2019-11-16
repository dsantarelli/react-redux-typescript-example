import { Reducer } from 'redux';
import CharacterActions from '../actions/CharacterActions';
import CharacterActionTypes from '../actions/CharacterActionTypes';
import CharacterState from '../state/CharacterState';

const initialCharacterState: CharacterState = {
  characters: [],
  isFetching: false
};

const CharacterReducer: Reducer<CharacterState, CharacterActions> = (state = initialCharacterState, action) => {
  switch (action.type) {
    case CharacterActionTypes.GET_CHARACTERS_START: {
      return {
        ...state,
        isFetching: action.isFetching
      };
    }
    case CharacterActionTypes.GET_CHARACTERS_SUCCESS: {
      return {
        ...state,
        characters: action.characters,
        isFetching: action.isFetching
      };
    }
    case CharacterActionTypes.GET_CHARACTERS_FAILURE: {
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      };
    }
    default:
      return state;
  }
};

export default CharacterReducer;
