/* eslint-disable react/prop-types */

export default function Pokemon({pokemons}) {
  return (
    <>
      {pokemons.map(pokemon =>
        <div className="card" key={pokemon.id} >
          <img src={pokemon.img} alt={pokemon.name}></img>
          <p>{pokemon.name}</p>
        </div>
      )}
    </>
  );
}