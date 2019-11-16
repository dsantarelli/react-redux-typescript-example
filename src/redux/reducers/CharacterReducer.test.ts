import {
  getCharactersStart,
  getCharactersSuccess,
  getCharactersFailure
} from '../actions/CharacterActionCreators';
import ICharacterState from "../state/CharacterState";
import GetCharactersMock from '../../api/rest/GetCharactersMock';
import CharacterReducer from './CharacterReducer';

const initialState: ICharacterState = {
  characters: [],
  isFetching: false,
};

describe('CharacterReducer action type responses for', () => {
  
  describe('getCharactersStart', () => {
    const action = getCharactersStart();
    const newState = CharacterReducer(initialState, action);

    it('is fetching', () => {
      expect(newState.isFetching).toBe(true);
    });
  });

  describe('getCharactersSuccess', () => {

    const results = GetCharactersMock;
    const action = getCharactersSuccess(results);
    const newState = CharacterReducer(initialState, action);

    it('fetched characters', () => {
      expect(newState.characters).toEqual(GetCharactersMock);
    });

    it('is not fetching', () => {
      expect(newState.isFetching).toBe(false);
    });
  });

  describe('getCharactersFailure', () => {

    const action = getCharactersFailure('error');
    const newState = CharacterReducer(initialState, action);

    it('has not fetched characters', () => {
      expect(newState.characters).toEqual([]);
    });

    it('is not fetching', () => expect(newState.isFetching).toBe(false));
  });
});
