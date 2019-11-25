import { Reducer } from 'redux';
import CharactersListState from '../state/CharactersListState';
import { CharacterActionTypes, CharactersListActions } from '../actions/CharactersActions';

const initialState: CharactersListState = {
  characters: [],
  isFetching: false
};
const CharactersListReducer: Reducer<CharactersListState, CharactersListActions> = (state = initialState, action: CharactersListActions) => {

  switch (action.type) {
    case CharacterActionTypes.GET_CHARACTERS_LIST_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case CharacterActionTypes.GET_CHARACTERS_LIST_SUCCESS: {
      return {
        ...state,
        characters: action.characters,
        isFetching: false
      };
    }
    case CharacterActionTypes.GET_CHARACTERS_LIST_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    default: return state;
  }
};

export default CharactersListReducer;
