import {heroes} from "../data/heroes";



export const getHeroeById = (id: number) => {
    return heroes.find( hero => hero.id === id );
}

