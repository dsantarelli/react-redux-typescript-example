import Character from '../../api/model/Character';

export default interface CharactersListState {
  characters: Character[],
  isFetching: boolean,
  error?: string
}
