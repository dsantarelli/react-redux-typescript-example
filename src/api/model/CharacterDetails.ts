import Planet from "./Planet";
import Film from "./Film";
import Species from "./Species";
import Vehicle from "./Vehicle";
import Starship from "./Starship";

export default interface CharacterDetails {
  id: number,
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: Planet,
  films: Film[],
  species: Species[],
  vehicles: Vehicle[],
  starships: Starship[],
  created: string,
  edited: string,
  url: string
}