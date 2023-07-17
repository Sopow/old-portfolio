import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

function ChessboardCustom() {
  const [game, setGame] = useState(new Chess());
  const [isGameOver, setIsGameOver] = useState(false);
  const [startGame, setStartGame] = useState(false);

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }
  //Movement of computer
  function makeRandomMove() {
    const possibleMove = game.moves();

    if (game.game_over() || game.in_draw() || possibleMove.length === 0) {
      setIsGameOver(true);
      return;
    }

    const randomIndex = Math.floor(Math.random() * possibleMove.length);
    safeGameMutate((game) => {
      game.move(possibleMove[randomIndex]);
    });
  }

  function onDrop(source, target) {
    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: source,
        to: target,
        promotion: "q",
      });
    });
    if (move == null) return false;
    setTimeout(makeRandomMove, 200);
    return true;
  }

  function resetGame() {
    setGame(new Chess());
    setIsGameOver(false);
  }

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Chessboard
        position={startGame ? game.fen() : game.board}
        onPieceDrop={onDrop}
        customBoardStyle={{
          borderRadius: "5px",
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.3)",
        }}
        customDarkSquareStyle={{ backgroundColor: "#011627d6" }}
        customLightSquareStyle={{ backgroundColor: "#175553" }}
      />
      {isGameOver && (
        <div className="game-over">
          <p style={{ fontWeight: "bold" }}>Game Over</p>
          <p>{game.turn() === "w" ? "Black" : "White"} won</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
      {!startGame && (
        <div className="game-over">
          <p style={{ fontWeight: "bold" }}>Start Game</p>
          <button onClick={() => setStartGame(true)}>Play</button>
        </div>
      )}
    </div>
  );
}

export default ChessboardCustom;
