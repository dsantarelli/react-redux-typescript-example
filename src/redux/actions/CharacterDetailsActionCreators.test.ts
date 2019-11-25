import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import GetCharacterDetailsMock from '../../api/rest/GetCharacterDetailsMock';
import {
  getCharacterDetailsStart,
  getCharacterDetailsSuccess,
  getCharacterDetailsProgress,
  getCharacterDetails
} from './CharacterDetailsActionCreators';
import { CharacterActionTypes } from './CharactersActions';
import GetCharactersMock from '../../api/rest/GetCharactersMock';


const mockStore = configureMockStore([thunk]);

describe('getCharacters', () => {

  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it(`creates ${CharacterActionTypes.GET_CHARACTER_DETAILS_START}, some
              ${CharacterActionTypes.GET_CHARACTER_DETAILS_PROGRESS} and 
              ${CharacterActionTypes.GET_CHARACTER_DETAILS_SUCCESS} after successfuly fetching character details`, async () => {

    const character = GetCharactersMock[0];
    character.homeworld = '';
    character.species = [];
    character.vehicles = [];
    character.starships = [];
    character.films = [];

    moxios.wait(() => {
      const firstRequest = moxios.requests.first();
      firstRequest.respondWith({ status: 200, response: character });
    });

    const mock = GetCharacterDetailsMock[0];
    (mock.homeworld as any) = undefined;
    mock.species = [];
    mock.vehicles = [];
    mock.starships = [];
    mock.films = [];

    const store = mockStore({ isFetching: false });
    await store.dispatch<any>(getCharacterDetails(character));
    const actions = store.getActions();
    expect(actions[0]).toEqual(getCharacterDetailsStart(mock.id, mock.name));
    expect(actions[1]).toEqual(getCharacterDetailsProgress(10, `Loading info...`));
    expect(actions[2]).toEqual(getCharacterDetailsProgress(20, `Loading homeworld...`));
    expect(actions[3]).toEqual(getCharacterDetailsProgress(30, `Loading species...`));
    expect(actions[4]).toEqual(getCharacterDetailsProgress(50, `Loading veichles...`));
    expect(actions[5]).toEqual(getCharacterDetailsProgress(60, `Loading starships...`));
    expect(actions[6]).toEqual(getCharacterDetailsProgress(90, `Loading films...`));
    expect(actions[7]).toEqual(getCharacterDetailsProgress(100, `Operation completed!`));
    expect(actions[8]).toEqual(getCharacterDetailsSuccess(mock));
  });

  it(`creates ${CharacterActionTypes.GET_CHARACTER_DETAILS_START}, a           
              ${CharacterActionTypes.GET_CHARACTER_DETAILS_PROGRESS} and     
              ${CharacterActionTypes.GET_CHARACTER_DETAILS_FAILURE} after a failure while fetching character details`, () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500
      });
    });

    const characterMock = GetCharactersMock[0];
    const store = mockStore({ isFetching: false });
    return store.dispatch<any>(getCharacterDetails(characterMock)).then(() => {

      const actions = store.getActions();
      expect(actions.length).toBe(3);

      const getCharactersStartAction = actions[0];
      expect(getCharactersStartAction.type).toBe(CharacterActionTypes.GET_CHARACTER_DETAILS_START);
      expect(getCharactersStartAction.characterId).toBe(1);
      expect(getCharactersStartAction.characterName).toBe(characterMock.name);

      const getCharacterDetailsProgress = actions[1];
      expect(getCharacterDetailsProgress.type).toBe(CharacterActionTypes.GET_CHARACTER_DETAILS_PROGRESS);
      expect(getCharacterDetailsProgress.value).toBe(10);
      expect(getCharacterDetailsProgress.message).toBe(`Loading info...`);

      const getCharactersFailureAction = actions[2];
      expect(getCharactersFailureAction.type).toBe(CharacterActionTypes.GET_CHARACTER_DETAILS_FAILURE);
      expect(getCharactersFailureAction.error.includes("Could not load " + characterMock.name)).toBe(true);
    });
  });
});
