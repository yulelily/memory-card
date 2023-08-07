/* eslint-disable react/prop-types */

export default function Pokemon({pokemon}) {
  return (
    <>
      <img src={`/images/${pokemon.img}`} alt={pokemon.name}></img>
      <p>{pokemon.name}</p>
    </>
  );
}