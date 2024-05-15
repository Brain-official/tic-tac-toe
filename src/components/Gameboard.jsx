import React from 'react'
import { useState } from 'react'

const initialBoardGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


// activePlayerSymbol
function Gameboard({onSelectSquare, turns}) {
    let gameBoard = initialBoardGame;

    for(const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;
        
        gameBoard[row][col] = player;
    }
    

    // const [boardGame, setBoardGame] = useState(initialBoardGame);

    // const handleSelectSquare = (rowIndex, colIndex) => {
    //     setBoardGame((prevGameBoard)=> {
    //         const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard
    //     })

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
                <li key={rowIndex}> 
                    <ol>
                        {row.map((playerSymbol, colIndex) => 
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                                {/* () => handleSelectSquare(rowIndex, colIndex) */}
                            </li>
                        )}
                    </ol> 
                </li>
            )}
        </ol>
    )
}

export default Gameboard