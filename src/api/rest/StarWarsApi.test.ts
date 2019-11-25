import axios from 'axios';
import { StarWarsApi } from './StarWarsApi';

describe('StarWarsApi', () => {

  const api = new StarWarsApi();

  beforeEach(() => axios.get = jest.fn());

  it('getCharacters', () => {
    api.getCharacters();
    expect(axios.get).toHaveBeenCalledWith('https://swapi.co/api/people/');
  });

  it('searchCharacters', () => {
    const searchString = 'Luke';
    api.searchCharacters(searchString);
    expect(axios.get).toHaveBeenCalledWith(`https://swapi.co/api/people/?search=${searchString}`);
  });

  it('getCharacter', () => {
    api.getCharacter(1);
    expect(axios.get).toHaveBeenCalledWith(`https://swapi.co/api/people/1`);
  });

  it('getFilm', () => {
    api.getFilm(2);
    expect(axios.get).toHaveBeenCalledWith(`https://swapi.co/api/films/2`);
  });

  it('getPlanet', () => {
    api.getPlanet(3);
    expect(axios.get).toHaveBeenCalledWith(`https://swapi.co/api/planets/3`);
  });

  it('getSpecies', () => {
    api.getSpecies(4);
    expect(axios.get).toHaveBeenCalledWith(`https://swapi.co/api/species/4`);
  });

  it('getStarship', () => {
    api.getStarship(5);
    expect(axios.get).toHaveBeenCalledWith(`https://swapi.co/api/starships/5`);
  });

  it('getVehicle', () => {
    api.getVehicle(6);
    expect(axios.get).toHaveBeenCalledWith(`https://swapi.co/api/vehicles/6`);
  });

  it('getEntityIdFromUrl', () => {
    expect(api.getEntityIdFromUrl('https://swapi.co/api/starships/134')).toBe(134);
    expect(api.getEntityIdFromUrl('https://swapi.co/api/starships/134/')).toBe(134);
  });

});
