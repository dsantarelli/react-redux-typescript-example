import { Dispatch } from 'redux';
import { StarWarsApi } from '../../api/rest/StarWarsApi';
import {
  CharacterActionTypes,
  GetCharacterDetailsStartAction,
  GetCharacterDetailsSuccessAction,
  GetCharacterDetailsFailureAction,
  GetCharacterDetailsProgressAction
} from './CharactersActions';
import CharacterDetails from '../../api/model/CharacterDetails';
import Character from '../../api/model/Character';
import Axios from 'axios';


export const getCharacterDetailsStart = (characterId: number, characterName: string): GetCharacterDetailsStartAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTER_DETAILS_START,
    characterId: characterId,
    characterName: characterName
  };
}

export const getCharacterDetailsSuccess = (characterDetails: CharacterDetails): GetCharacterDetailsSuccessAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTER_DETAILS_SUCCESS,
    characterDetails: characterDetails
  };
}

export const getCharacterDetailsFailure = (error: string): GetCharacterDetailsFailureAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTER_DETAILS_FAILURE,
    error: error
  };
}

export const getCharacterDetailsProgress = (value: number, message: string): GetCharacterDetailsProgressAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTER_DETAILS_PROGRESS,
    value: value,
    message: message
  };
}

export const getCharacterDetails = (character: Character) => {
  return async (dispatch: Dispatch) => {

    const api = new StarWarsApi();
    const characterId = api.getEntityIdFromUrl(character.url);

    dispatch(getCharacterDetailsStart(characterId, character.name));
    dispatch(getCharacterDetailsProgress(10, `Loading info...`));

    try {
      const characterResponse = await api.getCharacter(characterId);
      const character = characterResponse.data;
      const characterDetails = {
        id: characterId,
        name: character.name,
        height: character.height,
        mass: character.mass,
        hair_color: character.hair_color,
        skin_color: character.skin_color,
        eye_color: character.eye_color,
        birth_year: character.birth_year,
        gender: character.gender,
        created: character.created,
        edited: character.edited,
        url: character.url
      } as CharacterDetails;

      try {
        dispatch(getCharacterDetailsProgress(20, `Loading homeworld...`));
        const h = await Axios.all([(character.homeworld) 
                        ? api.getPlanet(api.getEntityIdFromUrl(character.homeworld)) 
                        : Promise.resolve(null)]);

        if (h && h[0] && h[0] != null) {
          characterDetails.homeworld = h[0]!.data;
        }
      }
      catch (e) {
        dispatch(getCharacterDetailsFailure(`Could not load homeworld for ${character.name}: ${e.message}`));
        return;
      }

      try {
        dispatch(getCharacterDetailsProgress(30, `Loading species...`));
        const s = await Axios.all(character.species.map((url) => api.getSpecies(api.getEntityIdFromUrl(url))));
        characterDetails.species = s.map(x => x.data);
      }
      catch (e) {
        dispatch(getCharacterDetailsFailure(`Could not load species for ${character.name}: ${e.message}`));
        return;
      }

      try {
        dispatch(getCharacterDetailsProgress(50, `Loading veichles...`));
        const v = await Axios.all(character.vehicles.map((url) => api.getVehicle(api.getEntityIdFromUrl(url))));
        characterDetails.vehicles = v.map(x => x.data);
      }
      catch (e) {
        dispatch(getCharacterDetailsFailure(`Could not load vehicles for ${character.name}: ${e.message}`));
        return;
      }

      try {
        dispatch(getCharacterDetailsProgress(60, `Loading starships...`));
        const ss = await Axios.all(character.starships.map((url) => api.getStarship(api.getEntityIdFromUrl(url))));
        characterDetails.starships = ss.map(x => x.data);
      }
      catch (e) {
        dispatch(getCharacterDetailsFailure(`Could not load starships for ${character.name}: ${e.message}`));
        return;
      }

      try {
        dispatch(getCharacterDetailsProgress(90, `Loading films...`));
        const f = await Axios.all(character.films.map((url) => api.getFilm(api.getEntityIdFromUrl(url))));
        characterDetails.films = f.map(x => x.data);
      }
      catch (e) {
        dispatch(getCharacterDetailsFailure(`Could not load films for ${character.name}: ${e.message}`));
        return;
      }

      dispatch(getCharacterDetailsProgress(100, `Operation completed!`));
      dispatch(getCharacterDetailsSuccess(characterDetails));
    }
    catch (e) {
      dispatch(getCharacterDetailsFailure(`Could not load ${character.name}: ${e.message}`));
      return;
    }
  };
};

