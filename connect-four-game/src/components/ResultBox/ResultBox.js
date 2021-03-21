import "./resultBox.css";

import { initializeBoard, gameStateEnum } from "../../utils/defaults";
import { useEffect } from "react";

const initialBoard = {
  cells: initializeBoard(),
};

const ResultBox = ({
  player1,
  player2,
  setPlayers,
  setCells,
  result,
  setResult,
}) => {
  useEffect(() => {
    if (
      result === gameStateEnum.WINPLAYER1 ||
      result === gameStateEnum.WINPLAYER2
    ) {
      const body = document.querySelector("body");
      const gameData = document.querySelector(".game__data-container");
      const boardMessage = document.querySelector(".board__message-container");

      body.style.backgroundColor = "rgba(0, 0, 0, 0.65)";
      gameData.style.opacity = 0;
      boardMessage.style.opacity = 0;

      setPlayers((prevState) => {
        const players = [...prevState];
        const playerOne = { ...players[0] };
        const playerTwo = { ...players[1] };

        if (playerTwo.current) {
          playerOne.wins += 1;
        } else {
          playerTwo.wins += 1;
        }

        players[0] = playerOne;
        players[1] = playerTwo;

        return players;
      });
    } else {
      const body = document.querySelector("body");
      const gameData = document.querySelector(".game__data-container");
      const boardMessage = document.querySelector(".board__message-container");

      body.style.backgroundColor = "rgba(255, 255, 255, 1)";
      gameData.style.opacity = 1;
      boardMessage.style.opacity = 1;
    }
  }, [result, setPlayers]);

  const handleNextGame = (e) => {
    e.preventDefault();
    setResult(gameStateEnum.PLAYING);
    setCells(initialBoard.cells);
  };

  if (result === gameStateEnum.PLAYING) {
    return <div></div>;
  }

  if (result === gameStateEnum.DRAW) {
    return (
      <div className="result__box">
        <h5 className="result__box--header">No winner.</h5>
        <button className="result__box--button" onClick={handleNextGame}>
          Next game
        </button>
      </div>
    );
  }

  return (
    <div className="result__box">
      {result === gameStateEnum.WINPLAYER1 ? (
        <h5 className="result__box--header">{player1.name} won the game !!!</h5>
      ) : (
        <h5 className="result__box--header">{player2.name} won the game !!!</h5>
      )}
      <button className="result__box--button" onClick={handleNextGame}>
        Next game
      </button>
    </div>
  );
};

export default ResultBox;
