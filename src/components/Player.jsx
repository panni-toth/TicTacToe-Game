import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);
    function handleEditPlayer () {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
        console.log("PLAYERNAME " + playerName)

        if (isEditing) {
            onChangeName(symbol, event.target.value);
        }
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>;
    let buttonCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type='text' required value={playerName} onChange={handleChange} />;
        buttonCaption = 'Save';
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
              {editablePlayerName}
              <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditPlayer}>{buttonCaption}</button>
          </li>
    )
}