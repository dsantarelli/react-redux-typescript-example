import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import GetCharactersMock from '../../api/rest/GetCharactersMock';
import {
  getCharacters,
  searchCharacters,
  getCharactersStart,
  getCharactersSuccess
} from './CharactersListActionCreators';
import { CharacterActionTypes } from './CharactersActions';


const mockStore = configureMockStore([thunk]);

describe('getCharacters', () => {

  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it(`creates ${CharacterActionTypes.GET_CHARACTERS_LIST_START}, ${CharacterActionTypes.GET_CHARACTERS_LIST_SUCCESS} after successfuly fetching characters`, () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { results: GetCharactersMock }
      });
    });

    const expectedActions = [
      getCharactersStart(),
      getCharactersSuccess(GetCharactersMock)
    ];

    const initialState = {
      characters: [],
      isFetching: false
    };
    const store = mockStore(initialState);

    return store.dispatch<any>(getCharacters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it(`creates ${CharacterActionTypes.GET_CHARACTERS_LIST_START}, ${CharacterActionTypes.GET_CHARACTERS_LIST_FAILURE} after failing to fetch characters`, () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500
      });
    });

    const store = mockStore({ characters: [] });

    return store.dispatch<any>(getCharacters()).then(() => {

      const actions = store.getActions();

      expect(actions.length).toBe(2);

      const getCharactersStartAction = actions[0];
      expect(getCharactersStartAction.type).toBe(CharacterActionTypes.GET_CHARACTERS_LIST_START);

      const getCharactersFailureAction = actions[1];
      expect(getCharactersFailureAction.type).toBe(CharacterActionTypes.GET_CHARACTERS_LIST_FAILURE);
      expect(getCharactersFailureAction.error).not.toBe(null);
      expect(getCharactersFailureAction.error).toBeDefined();

    });
  });
});


describe('searchCharacters', () => {

  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it(`creates ${CharacterActionTypes.GET_CHARACTERS_LIST_START}, ${CharacterActionTypes.GET_CHARACTERS_LIST_SUCCESS} after successfuly fetching characters`, () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { results: GetCharactersMock }
      });
    });

    const expectedActions = [
      getCharactersStart(),
      getCharactersSuccess(GetCharactersMock)
    ];

    const initialState = {
      characters: [],
      isFetching: false,
    };
    const store = mockStore(initialState);

    return store.dispatch<any>(searchCharacters('Luke'))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it(`creates ${CharacterActionTypes.GET_CHARACTERS_LIST_START}, ${CharacterActionTypes.GET_CHARACTERS_LIST_FAILURE} after failing to fetch characters`, () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500
      });
    });

    const store = mockStore({ characters: [] });

    return store.dispatch<any>(searchCharacters('Luke')).then(() => {

      const actions = store.getActions();
      expect(actions.length).toBe(2);

      const getCharactersStartAction = actions[0];
      expect(getCharactersStartAction.type).toBe(CharacterActionTypes.GET_CHARACTERS_LIST_START);

      const getCharactersFailureAction = actions[1];
      expect(getCharactersFailureAction.type).toBe(CharacterActionTypes.GET_CHARACTERS_LIST_FAILURE);
      expect(getCharactersFailureAction.error).not.toBe(null);
      expect(getCharactersFailureAction.error).toBeDefined();

    });
  });
});
