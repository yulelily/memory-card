/* eslint-disable react/prop-types */

export default function ResultScreen({correct, newGame, pokemonsLength}) {
  return (
    <div className="resultScreen">
      <div className="resultCard" >
        <p>Final Score: {correct} correct</p>
        <p>Press <button className="playAgainBtn" value={pokemonsLength} onClick={(e) => newGame(e.target.value)} >play</button> to play again.</p>
      </div>
    </div>
  );
}