import PlayersInfo from "./components/PlayersInfo";

function App() {
  return (
    <main>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players">
          <PlayersInfo initialName={"Player 1"} symbol={"X"} />
          <PlayersInfo initialName={"Player 2"} symbol={"O"} />
        </ol>
      </div>
    </main>
  );
}

export default App;
