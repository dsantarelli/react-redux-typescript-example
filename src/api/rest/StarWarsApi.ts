import axios, { AxiosResponse } from 'axios';
import CharacterListResponse from '../model/CharacterListResponse';
import Character from '../model/Character';
import Film from '../model/Film';
import Starship from '../model/Starship';
import Vehicle from '../model/Vehicle';
import Species from '../model/Species';
import Planet from '../model/Planet';

export class StarWarsApi {

  private baseUrl = "https://swapi.dev/api";
  private peopleUrl = `${this.baseUrl}/people/`;
  private filmsUrl = `${this.baseUrl}/films/`;
  private starshipsUrl = `${this.baseUrl}/starships/`;
  private vehiclesUrl = `${this.baseUrl}/vehicles/`;
  private speciesUrl = `${this.baseUrl}/species/`;
  private planetsUrl = `${this.baseUrl}/planets/`;

  getCharacter(id: number): Promise<AxiosResponse<Character>> {
    return axios.get<Character>(`${this.peopleUrl}${id}`);
  }

  getCharacters(): Promise<AxiosResponse<CharacterListResponse>> {
    return axios.get<CharacterListResponse>(`${this.peopleUrl}`);
  }

  searchCharacters(term: string): Promise<AxiosResponse<CharacterListResponse>> {
    return axios.get<CharacterListResponse>(`${this.peopleUrl}?search=${term}`);
  }

  getPlanet(id: number): Promise<AxiosResponse<Planet>> {
    return axios.get<Planet>(`${this.planetsUrl}${id}`);
  }

  getFilm(id: number): Promise<AxiosResponse<Film>> {
    return axios.get<Film>(`${this.filmsUrl}${id}`);
  }

  getStarship(id: number): Promise<AxiosResponse<Starship>> {
    return axios.get<Starship>(`${this.starshipsUrl}${id}`);
  }

  getVehicle(id: number): Promise<AxiosResponse<Vehicle>> {
    return axios.get<Vehicle>(`${this.vehiclesUrl}${id}`);
  }

  getSpecies(id: number): Promise<AxiosResponse<Species>> {
    return axios.get<Species>(`${this.speciesUrl}${id}`);
  }

  getEntityIdFromUrl(url: string): number {
    const urlSegments = url.split('/').filter(x => x !== '');
    return parseInt(urlSegments[urlSegments.length - 1]);
  }
}