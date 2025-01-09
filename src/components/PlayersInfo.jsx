import { useState } from "react";

export default function PlayersInfo({ initialName, symbol }) {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  function handleClick() {
    setIsEdit(!isEdit);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li>
      <span className="player">
        {isEdit ? (
          <input type="text" value={playerName} onChange={handleChange} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
