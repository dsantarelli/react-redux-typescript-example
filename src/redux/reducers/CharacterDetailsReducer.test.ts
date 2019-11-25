import {
  getCharacterDetailsStart,
  getCharacterDetailsSuccess,
  getCharacterDetailsProgress,
  getCharacterDetailsFailure
} from '../actions/CharacterDetailsActionCreators';
import CharacterDetailsReducer from './CharacterDetailsReducer';
import CharacterDetailsState from '../state/CharacterDetailsState';
import GetCharacterDetailsMock from '../../api/rest/GetCharacterDetailsMock';

const initialState: CharacterDetailsState = {  
  isFetching: false
};

describe('CharacterDetailsReducer action type responses for', () => {
  
  describe('getCharacterDetailsStart', () => {
    
    const action = getCharacterDetailsStart(1, 'Luke Skywalker');
    const newState = CharacterDetailsReducer(initialState, action);

    it('is fetching', () => {
      expect(newState.isFetching).toBe(true);
      expect(newState.character).toBeDefined();
      expect((newState.character as any).id).toBe(1);
      expect((newState.character as any).name).toBe('Luke Skywalker');      
    });    
  });

  describe('getCharacterDetailsSuccess', () => {

    const mock = GetCharacterDetailsMock[0];
    const action = getCharacterDetailsSuccess(mock);
    const newState = CharacterDetailsReducer(initialState, action);

    it('fetched character', () => expect(newState.character).toEqual(mock));
    it('is not fetching', () => expect(newState.isFetching).toBe(false));
  });

  describe('getCharacterDetailsProgress', () => {
    
    const action = getCharacterDetailsProgress(10, 'Message');
    const newState = CharacterDetailsReducer(initialState, action);

    it('is fetching in progress', () => {
      expect(newState.isFetching).toBe(true);
      expect(newState.fetchingProgressValue).toBe(10);
      expect(newState.fetchingProgressMessage).toBe('Message');      
    });    
  });

  describe('getCharacterDetailsFailure', () => {

    const action = getCharacterDetailsFailure('error');
    const newState = CharacterDetailsReducer(initialState, action);

    it('has not fetched characters', () => expect(newState.character).not.toBeDefined());
    it('is not fetching', () => expect(newState.isFetching).toBe(false));
    it('is has error', () => expect(newState.error).toBe('error'));
  });
});
