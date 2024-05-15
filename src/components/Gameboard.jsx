import React from 'react'
import { useState } from 'react'

const initialBoardGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function Gameboard({onSelectSquare, activePlayerSymbol}) {

    const [boardGame, setBoardGame] = useState(initialBoardGame);

    const handleSelectSquare = (rowIndex, colIndex) => {
        setBoardGame((prevGameBoard)=> {
            const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedGameBoard
        })

        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {boardGame.map((row, rowIndex) => 
                <li key={rowIndex}> 
                    <ol>
                        {row.map((playerSymbol, colIndex) => 
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        )}
                    </ol> 
                </li>
            )}
        </ol>
    )
}

export default Gameboard