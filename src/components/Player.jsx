import React from 'react'
import { useState } from 'react'

function Player({initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)


    const handleNameChange = (event) => {
        setPlayerName(event.target.value)
    }
    

    const changeEditState =()=> {
        setIsEditing((editing) => !editing) //react best practice of updating the state.
    }   


    return (
        <>
            <li className={isActive ? "active" : undefined}>
                <span className='player'>
                    {isEditing ? <input type='text' required value={playerName} onChange={handleNameChange} /> : <span className='player-name'>{playerName}</span>}
                    <span className='player-symbol'>{symbol}</span>
                </span>
                <button onClick={changeEditState}>{isEditing ? "Save" : "Edit"}</button>
            </li>
        </>
    )
}

export default Player