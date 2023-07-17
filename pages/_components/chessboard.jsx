import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

function ChessboardCustom() {
  const [game, setGame] = useState(new Chess());
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameDraw, setIsGameDraw] = useState(false);
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
    console.log(possibleMove);

    if (game.game_over() || possibleMove.length === 0) {
      setIsGameOver(true);
      return;
    }

    if (
      game.in_draw() ||
      game.in_stalemate() ||
      game.in_threefold_repetition() ||
      game.insufficient_material()
    ) {
      setIsGameDraw(true);
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
        customArrowColor="#43D9AD"
      />
      {isGameDraw ||
        (isGameOver && (
          <div className="game-over">
            <button
              onClick={() => setIsGameOver(false)}
              className="close-button"
            >
              ✖
            </button>

            {isGameDraw && (
              <>
                <p>Draw</p>
              </>
            )}
            {isGameOver && (
              <>
                <p style={{ fontWeight: "bold" }}>Game Over</p>{" "}
                <p>{game.turn() === "w" ? "Black" : "White"} won</p>
              </>
            )}
            <button onClick={resetGame} className="button-play">
              Play Again
            </button>
          </div>
        ))}
      {!startGame && (
        <div className="game-over">
          <p style={{ fontWeight: "bold", paddingBottom: "10px" }}>
            Start Game
          </p>
          <button onClick={() => setStartGame(true)} className="button-play">
            Play
          </button>
        </div>
      )}
    </div>
  );
}

export default ChessboardCustom;
