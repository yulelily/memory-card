import { useState } from 'react'
import * as pokeFns from './pokeFns.js'
import Pokemon from './Pokemon.jsx'
import './App.css'

export default function App() {

  function shufflePokedex() {
    const oldPokedex = structuredClone(pokemons);
    const newPokedex = [];
    
    while(newPokedex.length < pokemons.length) {
      const random = Math.floor(Math.random() * oldPokedex.length);
      newPokedex.push(oldPokedex[random]);
      oldPokedex.splice(random, 1);
    }
  
    setPokemons(newPokedex);
  }

  const [pokemons, setPokemons] = useState([]);

  return (
    <>
      <h1>pokimane memory game !!!!!</h1>
      <div className="startButtons">
        <button value={12} onClick={(e) => pokeFns.populatePokedex(setPokemons, e.target.value)} >Normal</button>
        <button value={24} onClick={(e) => pokeFns.populatePokedex(setPokemons, e.target.value)} >Hard</button>
        <button value={36} onClick={(e) => pokeFns.populatePokedex(setPokemons, e.target.value)} >Maddening</button>
      </div>
      <div className="gameBoard" >
        {pokemons.map(pokemon => 
        <div className="pokeCard" key={pokemon.id} onClick={shufflePokedex} >
          <Pokemon pokemon={pokemon} />
        </div>)}
      </div>
    </>
  )
}