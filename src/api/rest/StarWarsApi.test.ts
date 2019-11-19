import axios from 'axios';
import { StarWarsApi } from './StarWarsApi';

// Tests
describe('getCharacters', () => {
  const api = new StarWarsApi();

  beforeEach(() => {
    axios.get = jest.fn();
  })

  describe('getCharacters', () => {
    it('httpClient is called as expected', () => {
      api.getCharacters();
      expect(axios.get).toHaveBeenCalledWith('https://swapi.co/api/people/');
    });
  });

  describe('searchCharacters', () => {
    const searchString = 'Luke';

    beforeEach(() => {
      axios.get = jest.fn();
    })

    it('httpClient is called as expected', () => {
      api.searchCharacters(searchString);
      expect(axios.get).toHaveBeenCalledWith(`https://swapi.co/api/people/?search=${searchString}`);
    });
  });
});
