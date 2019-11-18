import { Reducer } from 'redux';
import CharactersListState from '../state/CharactersListState';
import CharactersListActions, { CharacterActionTypes } from '../actions/CharactersListActions';

const initialState: CharactersListState = {
  characters: [],
  isFetching: false
};
const CharactersListReducer: Reducer<CharactersListState, CharactersListActions> = (state = initialState, action) => {
  
  switch (action.type) {
    case CharacterActionTypes.GET_CHARACTERS_LIST_START: {
      return {
        ...state,
        isFetching: action.isFetching
      };
    }
    case CharacterActionTypes.GET_CHARACTERS_LIST_SUCCESS: {
      return {
        ...state,
        characters: action.characters,
        isFetching: action.isFetching
      };
    }
    case CharacterActionTypes.GET_CHARACTERS_LIST_FAILURE: {
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      };
    }
    default: return state;
  }
};

export default CharactersListReducer;
