import './App.css';
import Player from './components/Player';
import Gameboard from './components/Gameboard';
import { useState } from 'react';
import Log from './components/Log';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X")


  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X" )

    setGameTurns((prevTurns) => {
      let currentActivePlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentActivePlayer = "O";
      }

      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentActivePlayer},
        ...prevTurns
      ]

      return updatedTurns;
    })
  }


  return (
    <main>
      <div id='game-container'>
        <ol id='players'  className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        {/* <Gameboard  onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/> */}
        <Gameboard  onSelectSquare={handleSelectSquare}  turns={gameTurns}/>
      </div>

      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;


