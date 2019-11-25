import CharacterDetails from "../model/CharacterDetails";

const GetCharacterDetailsMock: CharacterDetails[] = [{
  "id": 1,
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.co/api/people/1/",
  "homeworld": {
    "name": "Tatooine",
    "rotation_period": "23",
    "orbital_period": "304",
    "diameter": "10465",
    "climate": "arid",
    "gravity": "1 standard",
    "terrain": "desert",
    "surface_water": "1",
    "population": "200000",
    "created": "2014-12-09T13:50:49.641000Z",
    "edited": "2014-12-21T20:48:04.175778Z",
    "url": "https://swapi.co/api/planets/1/"
  },
  "species": [
    {
      "name": "Human",
      "classification": "mammal",
      "designation": "sentient",
      "average_height": "180",
      "skin_colors": "caucasian, black, asian, hispanic",
      "hair_colors": "blonde, brown, black, red",
      "eye_colors": "brown, blue, green, hazel, grey, amber",
      "average_lifespan": "120",
      "language": "Galactic Basic",
      "created": "2014-12-10T13:52:11.567000Z",
      "edited": "2015-04-17T06:59:55.850671Z",
      "url": "https://swapi.co/api/species/1/"
    }
  ],
  "vehicles": [
    {
      "name": "Snowspeeder",
      "model": "t-47 airspeeder",
      "manufacturer": "Incom corporation",
      "cost_in_credits": "unknown",
      "length": "4.5",
      "max_atmosphering_speed": "650",
      "crew": "2",
      "passengers": "0",
      "cargo_capacity": "10",
      "consumables": "none",
      "vehicle_class": "airspeeder",
      "created": "2014-12-15T12:22:12Z",
      "edited": "2014-12-22T18:21:15.623033Z",
      "url": "https://swapi.co/api/vehicles/14/"
    }
  ],
  "starships": [
    {
      "name": "X-wing",
      "model": "T-65 X-wing",
      "manufacturer": "Incom Corporation",
      "cost_in_credits": "149999",
      "length": "12.5",
      "max_atmosphering_speed": "1050",
      "crew": "1",
      "passengers": "0",
      "cargo_capacity": "110",
      "consumables": "1 week",
      "hyperdrive_rating": "1.0",
      "MGLT": "100",
      "starship_class": "Starfighter",
      "created": "2014-12-12T11:19:05.340000Z",
      "edited": "2014-12-22T17:35:44.491233Z",
      "url": "https://swapi.co/api/starships/12/"
    }
  ],
  "films": [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfre...",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25",
      "created": "2014-12-10T14:23:31.880000Z",
      "edited": "2015-04-11T09:46:52.774897Z",
      "url": "https://swapi.co/api/films/1/"
    }
  ]
}];

export default GetCharacterDetailsMock;
