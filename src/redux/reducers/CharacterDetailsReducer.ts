import { Reducer } from 'redux';
import { CharacterActionTypes, CharacterDetailsActions } from '../actions/CharactersActions';
import CharacterDetailsState from '../state/CharacterDetailsState';
import CharacterDetails from '../../api/model/CharacterDetails';

const initialState: CharacterDetailsState = {  
  isFetching: false
};
const CharacterDetailsReducer: Reducer<CharacterDetailsState, CharacterDetailsActions> = (state = initialState, action: CharacterDetailsActions) => {
  
  switch (action.type) {
    case CharacterActionTypes.GET_CHARACTER_DETAILS_START: {
      return {
        ...state,
        isFetching: true,
        character: { 
          id: action.characterId,
          name: action.characterName 
        } as CharacterDetails
      };
    }
    case CharacterActionTypes.GET_CHARACTER_DETAILS_PROGRESS: {
      return {
        ...state,
        isFetching: true,
        fetchingProgressValue: action.value,
        fetchingProgressMessage: action.message
      };
    }
    case CharacterActionTypes.GET_CHARACTER_DETAILS_SUCCESS: {
      return {
        ...state,
        character: action.characterDetails,
        isFetching: false        
      };
    }
    case CharacterActionTypes.GET_CHARACTER_DETAILS_FAILURE: {
      return {
        ...state,        
        isFetching: false,
        error: action.error
      };
    }
    default: return state;
  }
};

export default CharacterDetailsReducer;
