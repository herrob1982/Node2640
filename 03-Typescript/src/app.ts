import { getHeroeById } from "./services/hero.service";




const hero = getHeroeById(2);

console.log(hero?.name ?? "No existe heroe" );

