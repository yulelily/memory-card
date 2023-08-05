import { useState } from 'react'
import pokeFns from './pokeFns.js'
import Pokemon from './Pokemon.jsx'
import data from './assets/data.js'
import './App.css'

export default function App() {

  const [pokemons, setPokemons] = useState(["espeon"]);

  return (
    <>
      <h1>pokimane memory game !!!!!</h1>
      <button onClick={async () => await pokeFns(setPokemons)} >start</button>
      <Pokemon pokemons={pokemons} />
      <img src={data[93].img} alt={data[93].name} ></img>
      <img src={data[94].img} alt={data[94].name} ></img>
    </>
  )
}