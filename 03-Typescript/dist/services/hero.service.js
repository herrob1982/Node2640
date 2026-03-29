"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroeById = void 0;
const heroes_1 = require("../data/heroes");
const getHeroeById = (id) => {
    return heroes_1.heroes.find(hero => hero.id === id);
};
exports.getHeroeById = getHeroeById;
