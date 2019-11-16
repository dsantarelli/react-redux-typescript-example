import Character from '../../api/model/Character';

export default interface CharacterState {
  readonly characters: Character[],
  readonly isFetching: boolean
}
