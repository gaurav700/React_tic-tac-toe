export default function GameBoard({ onSelectSquare, turns /* , isActive*/ }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // function handleClick(row, col) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[row][col] = isActive;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }
  const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={
                    () =>
                      onSelectSquare(
                        rowIndex,
                        colIndex
                      ) /* () => handleClick(rowIndex, colIndex) */
                  }
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
