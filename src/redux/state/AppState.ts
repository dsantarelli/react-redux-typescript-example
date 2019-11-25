import CharactersListState from "./CharactersListState";
import CharacterDetailsState from "./CharacterDetailsState";

export default interface AppState {
  charactersListState: CharactersListState;
  characterDetailsState: CharacterDetailsState;
}
