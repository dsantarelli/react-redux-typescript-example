import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from './CharacterCard';
import GetCharacterDetailsMock from '../../api/rest/GetCharacterDetailsMock';

describe("CharacterCard", () => {

    it("should render character details", () => {

        const characterDetails = GetCharacterDetailsMock[0];    
        const wrapper = shallow(<CharacterCard character={characterDetails} />);
        
        const text = wrapper.text();        
        expect(text.includes(characterDetails.name)).toBe(true);
        expect(text.includes(characterDetails.gender)).toBe(true);
        expect(text.includes(characterDetails.birth_year)).toBe(true);
        expect(text.includes(characterDetails.homeworld.name)).toBe(true);
        expect(text.includes(characterDetails.height)).toBe(true);
        expect(text.includes(characterDetails.mass)).toBe(true);
        expect(text.includes(characterDetails.hair_color)).toBe(true);
        expect(text.includes(characterDetails.skin_color)).toBe(true);
        expect(text.includes(characterDetails.eye_color)).toBe(true);

        characterDetails.species.forEach(x =>
            expect(text.includes(x.name)).toBe(true));

        characterDetails.vehicles.forEach(x => 
            expect(text.includes(x.name)).toBe(true));

        characterDetails.starships.forEach(x =>
            expect(text.includes(x.name)).toBe(true));

        characterDetails.films.forEach(x => {
            expect(text.includes(x.title)).toBe(true);
            expect(text.includes(`${new Date(x.release_date).getFullYear()}`)).toBe(true);
        });
    })
});
