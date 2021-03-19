import "./gameLayout.css";

import Board from "../Board/Board";

const GameLayout = ({ player1, player2, setPlayers, gameRun }) => {
  const resetScoreHandler = (e) => {
    e.preventDefault();

    setPlayers((prevState) => {
      const prevPlayer1 = [...prevState][0];
      const prevPlayer2 = [...prevState][1];

      prevPlayer1.wins = 0;
      prevPlayer2.wins = 0;

      return [prevPlayer1, prevPlayer2];
    });
  };

  return (
    <section className="section__game">
      <div className="game__data-container">
        {player1.current ? (
          <h3 className="game__current-player">
            Current player:
            <span className="current-player--one">{player1.name}</span>
          </h3>
        ) : (
          <h3 className="game__current-player">
            Current player:
            <span className="current-player--two">{player2.name}</span>
          </h3>
        )}

        <div className="game__score">
          <h3 className="score__title">Score:</h3>
          <div className="score__player-container">
            <p className="score__player--one">
              {player1.name}: {player1.wins}
            </p>
            <p className="score__player--two">
              {player2.name}: {player2.wins}
            </p>
          </div>
          <button className="score__reset-button" onClick={resetScoreHandler}>
            Reset
          </button>
        </div>
      </div>

      <Board
        player1={player1}
        player2={player2}
        setPlayers={setPlayers}
        gameRun={gameRun}
      />
    </section>
  );
};

export default GameLayout;
