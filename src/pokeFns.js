import data from './assets/data.js'
import { v4 as uuid } from 'uuid'

function pokeFns(setPokemons) {
  const pokedex = [];
  const pokedexSet = new Set();

  while (pokedex.length < 16) {
    const random = Math.floor(Math.random() * data.length);
    const randomPokemon = data[random];
    if (!pokedexSet.has(randomPokemon.name)) {
      pokedex.push({
        "name": randomPokemon.name,
        "img": randomPokemon.img,
        "id": uuid()
      });
      pokedexSet.add(randomPokemon.name);
    }
  }
  
  setPokemons(pokedex);
}

export default pokeFns;