import React, { FunctionComponent } from 'react';
import CharacterDetails from '../../api/model/CharacterDetails';

interface Props {
    character: CharacterDetails
}
const CharacterCard: FunctionComponent<Props> = (props: Props) => {
    const { character } = props;
    return (
        <div>
            <div className="row">
                <div className="col-sm-6">
                    Name: <strong>{character.name}</strong>
                </div>
                <div className="col-sm-6">
                    Species: <strong>{character.species.length === 0 ? 
                        "unknown" : character.species.map(x => `${x.name}`).join(', ')}</strong>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    Gender: <strong>{character.gender}</strong>
                </div>
                <div className="col-sm-6">
                    Birth Year: <strong>{character.birth_year}</strong>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    Home World: <strong>{`${character.homeworld.name}`}</strong>
                </div>
                <div className="col-sm-6">
                    Height: <strong>{character.height}</strong>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    Mass: <strong>{character.mass}</strong>
                </div>
                <div className="col-sm-6">
                    Hair: <strong>{character.hair_color}</strong>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    Skin: <strong>{character.skin_color}</strong>
                </div>
                <div className="col-sm-6">
                    Eye color: <strong>{character.eye_color}</strong>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    Veichles: <strong>{character.vehicles.length === 0 ?
                        "none" : character.vehicles.map(x => `${x.name}`).join(', ')}</strong>
                </div>
                <div className="col-sm-6">
                    Starships: <strong>{character.starships.length === 0 ?
                        "none" : character.starships.map(x => `${x.name}`).join(', ')}</strong>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12">
                    <strong>Films</strong>
                    <ul className="list">
                        {character.films
                            .sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime())
                            .map(x =>
                                <li key={x.url} className="list-item">
                                    {x.title} ({new Date(x.release_date).getFullYear()})
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default CharacterCard;