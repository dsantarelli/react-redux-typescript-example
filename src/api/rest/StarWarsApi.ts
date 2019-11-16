import axios, { AxiosResponse } from 'axios';
import CharacterListResponse from '../model/CharacterListResponse';

export class StarWarsApi {

  getCharacters(): Promise<AxiosResponse<CharacterListResponse>> {
    return axios.get<CharacterListResponse>('https://swapi.co/api/people/');
  }

  searchCharacters(term: string): Promise<AxiosResponse<CharacterListResponse>> {
    return axios.get<CharacterListResponse>(`https://swapi.co/api/people/?search=${term}`);
  }
}
