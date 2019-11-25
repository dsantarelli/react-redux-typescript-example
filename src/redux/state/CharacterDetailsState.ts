import CharacterDetails from "../../api/model/CharacterDetails";

export default interface CharacterDetailsState {
  character?: CharacterDetails,
  isFetching: boolean,
  fetchingProgressValue?: number,
  fetchingProgressMessage?: string,
  error?: string
}