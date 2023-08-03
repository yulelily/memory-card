const pokeapi = import('pokeapi-js-wrapper');

async function pokeFns(setPokemons) {
  const pokedex = new (await pokeapi).Pokedex({cacheImages: true});
  const pokes = await pokedex.getPokemonsList();
  console.log(pokes);
}

export default pokeFns;