import { useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayersInfo from "./components/PlayersInfo";
import Log from "./components/Log";
import { winningCombinations } from "./winningCombinations.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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

  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combinations of winningCombinations) {
    const firstSquareSymbol =
      gameBoard[combinations[0].row][combinations[0].col];
    const secondSquareSymbol =
      gameBoard[combinations[1].row][combinations[1].col];
    const thirdSquareSymbol =
      gameBoard[combinations[2].row][combinations[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol == thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleRestart() {
    setGameTurns([]);
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
        {(winner || hasDraw) && (
          <GameOver winner={winner} OnRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
