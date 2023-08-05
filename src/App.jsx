import { useState } from 'react'
import * as pokeFns from './pokeFns.js'
import Pokemon from './Pokemon.jsx'
import './App.css'

export default function App() {

  const [pokemons, setPokemons] = useState([]);

  return (
    <>
      <h1>pokimane memory game !!!!!</h1>
      <div className="startButtons">
        <button value={12} onClick={(e) => pokeFns.populatePokedex(setPokemons, e.target.value)} >Normal</button>
        <button value={24} onClick={(e) => pokeFns.populatePokedex(setPokemons, e.target.value)} >Hard</button>
        <button value={32} onClick={(e) => pokeFns.populatePokedex(setPokemons, e.target.value)} >Maddening</button>
      </div>
      <Pokemon pokemons={pokemons} />
    </>
  )
}