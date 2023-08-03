/* eslint-disable react/prop-types */

export default function Pokemon({pokemons}) {
  return (
    <>
      {pokemons.map(poke => <p key={poke} >{poke} </p>)}
    </>
  );
}