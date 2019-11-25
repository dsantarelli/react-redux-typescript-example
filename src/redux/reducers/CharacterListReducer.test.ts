import {
  getCharactersStart,
  getCharactersSuccess,
  getCharactersFailure
} from '../actions/CharactersListActionCreators';
import CharactersListState from "../state/CharactersListState";
import GetCharactersMock from '../../api/rest/GetCharactersMock';
import CharactersListReducer from './CharactersListReducer';

const initialState: CharactersListState = {
  characters: [],
  isFetching: false,
};

describe('CharactersListReducer action type responses for', () => {

  describe('getCharactersStart', () => {
    const action = getCharactersStart();
    const newState = CharactersListReducer(initialState, action);

    it('is fetching', () => expect(newState.isFetching).toBe(true));
  });

  describe('getCharactersSuccess', () => {

    const results = GetCharactersMock;
    const action = getCharactersSuccess(results);
    const newState = CharactersListReducer(initialState, action);

    it('fetched characters', () => expect(newState.characters).toEqual(GetCharactersMock));
    it('is not fetching', () => expect(newState.isFetching).toBe(false));
  });

  describe('getCharactersFailure', () => {

    const action = getCharactersFailure('error');
    const newState = CharactersListReducer(initialState, action);

    it('has not fetched characters', () => expect(newState.characters).toEqual([]));
    it('is not fetching', () => expect(newState.isFetching).toBe(false));
    it('is has error', () => expect(newState.error).toBe('error'));
  });
});
