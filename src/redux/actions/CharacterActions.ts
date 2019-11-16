import {
  GetCharactersStartAction,
  GetCharactersSuccessAction,
  GetCharactersFailureAction
} from './GetCharactersActions';

// Combine the action types with a union
type CharacterActions = 
  GetCharactersStartAction
  | GetCharactersSuccessAction
  | GetCharactersFailureAction;

export default CharacterActions;