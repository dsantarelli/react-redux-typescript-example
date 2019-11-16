import Character from "./Character";

export default interface CharacterListResponse {
    count: number,
    next: string,
    previous: string,
    results: Character[]
}