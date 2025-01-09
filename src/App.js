import { useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayersInfo from "./components/PlayersInfo";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [isActivePlayer, setIsActivePlayer] = useState("X");
  function handleSelectSquare() {
    setIsActivePlayer((currState) => (currState === "X" ? "O" : "X"));
    setGameTurns();
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
        <GameBoard
          onSelectSquare={handleSelectSquare}
          isActive={isActivePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
