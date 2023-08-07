import { useState } from 'react'
import * as pokeFns from './pokeFns.js'
import Pokemon from './components/Pokemon.jsx'
import HelpScreen from './components/HelpScreen.jsx'
import ResultScreen from './components/ResultScreen.jsx'
import './styles/App.css'

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

  function handleClick(pokemonName) {

    if (!memory.has(pokemonName)) {
      memory.add(pokemonName);
      setMemory(memory);
      setCorrect(correct + 1);

      if (correct + 1 > localStorage.getItem("highscore")) {
        localStorage.setItem("highscore", correct + 1);
        setHighscore(correct + 1);
      }

      if (correct + 1 >= pokemons.length) {
        console.log("win !");
        gameOver();
      } else {
        shufflePokedex();
      }

    } else {
      gameOver();
    }
  }

  function displayHelp() {
    const helpScreen = document.querySelector(".helpScreen");
    helpScreen.style.display = "flex";
  }

  function newGame(value) {
    const gameBoardStatus = document.querySelector(".gameBoardStatus");
    gameBoardStatus.style.display = "block";
    const resultScreen = document.querySelector(".resultScreen");
    resultScreen.style.display = "none";
    
    setMemory(new Set());
    setCorrect(0);
    pokeFns.populatePokedex(setPokemons, value)
  }

  function gameOver() {
    const resultScreen = document.querySelector(".resultScreen");
    resultScreen.style.display = "flex";
  }

  const [pokemons, setPokemons] = useState([]);
  const [memory, setMemory] = useState(new Set());
  const [correct, setCorrect] = useState(0);
  const [highscore, setHighscore] = useState(localStorage.getItem("highscore") === null ? 0 : localStorage.getItem("highscore"));

  return (
    <>
      <div className="startButtons">
        <button value={12} onClick={(e) => newGame(e.target.value)} >Normal</button>
        <button value={24} onClick={(e) => newGame(e.target.value)} >Hard</button>
        <button value={36} onClick={(e) => newGame(e.target.value)} >Maddening</button>
        <button onClick={() => displayHelp()} >?</button>
      </div>
      <HelpScreen />
      <ResultScreen correct={correct} newGame={newGame} pokemonsLength={pokemons.length} />
      <p className="gameBoardStatus" >score: {correct}/{pokemons.length} highscore: {highscore}</p>
      <div className="gameBoard" >
        {pokemons.map(pokemon => 
        <div className="pokeCard" key={pokemon.id} value={pokemon.name} onClick={(e) => handleClick(e.currentTarget.getAttribute("value"))} >
          <Pokemon pokemon={pokemon} />
        </div>)}
      </div>
    </>
  )
}