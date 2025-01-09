import { useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayersInfo from "./components/PlayersInfo";
import Log from "./components/Log";

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [isActivePlayer, setIsActivePlayer] = useState("X");
  const isActivePlayer = derivedActivePlayer(gameTurns);

  function handleSelectSquare(row, col) {
    // setIsActivePlayer((currState) => (currState === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let isActivePlayer = derivedActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: row, col: col }, player: isActivePlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <h1>Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayersInfo
            initialName={"Player 1"}
            symbol={"X"}
            isActive={isActivePlayer === "X"}
          />
          <PlayersInfo
            initialName={"Player 2"}
            symbol={"O"}
            isActive={isActivePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
