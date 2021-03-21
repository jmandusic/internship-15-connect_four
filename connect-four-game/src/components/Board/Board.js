import { useState } from "react";
import "./board.css";

import ResultBox from "../ResultBox/ResultBox";
import Circle from "./Circle";
import { initializeBoard } from "../../utils/defaults";
import {
  checkWinHorizontal,
  checkWinVertical,
  checkWinPositiveDiagonal,
  checkWinNegativeDiagonal,
} from "../../utils/result";

const initialBoard = {
  cells: initializeBoard(),
};

const gameStateEnum = {
  PLAYING: "PLAYING",
  WINPLAYER1: "Player 1 won the game !!!",
  WINPLAYER2: "Player 2 won the game !!!",
  DRAW: "DRAW",
};

const Board = ({ player1, player2, setPlayers, addWin }) => {
  const [cells, setCells] = useState(initialBoard.cells);
  const [result, setResult] = useState(gameStateEnum.PLAYING);
  const [message, setMessage] = useState("");

  const playerMoveHandler = (id) => {
    if (result !== gameStateEnum.PLAYING) {
      return;
    }
    const columnId = id % 7;
    for (let cellId = columnId + 5 * 7; cellId > -1; cellId -= 7) {
      if (!cells[cellId]?.player) {
        cellStateHandler(cellId);
        setMessage("");
        break;
      }
      if (cellId === columnId && cells[cellId]?.player) {
        setMessage("This column is filled, play again");
        return;
      }
    }

    setPlayers((prevState) => {
      const players = [...prevState];
      const playerOne = { ...players[0] };
      const playerTwo = { ...players[1] };

      playerOne.current = !playerOne.current;
      playerTwo.current = !playerTwo.current;
      players[0] = playerOne;
      players[1] = playerTwo;

      return players;
    });
  };

  const cellStateHandler = (cellId) => {
    if (player1.current) {
      setCells((prevState) => {
        const newCells = [...prevState];
        const updatedCell = { ...prevState[cellId] };

        updatedCell.player = player1;
        newCells[cellId] = updatedCell;
        resultHandler(newCells);

        return newCells;
      });
    } else {
      setCells((prevState) => {
        const newCells = [...prevState];
        const updatedCell = { ...prevState[cellId] };

        updatedCell.player = player2;
        newCells[cellId] = updatedCell;
        resultHandler(newCells);

        return newCells;
      });
    }
  };

  const resultHandler = (currentCells) => {
    if (!currentCells.find((cell) => cell.player === undefined)) {
      setResult(gameStateEnum.DRAW);
      return;
    }

    if (
      checkWinHorizontal(currentCells) ||
      checkWinVertical(currentCells) ||
      checkWinPositiveDiagonal(currentCells) ||
      checkWinNegativeDiagonal(currentCells)
    ) {
      if (player1.current) {
        setResult(gameStateEnum.WINPLAYER1);
        resultHandler(cells);
      } else {
        setResult(gameStateEnum.WINPLAYER2);
        resultHandler(cells);
      }
    }
  };

  return (
    <div className="board">
      <div className="board__message-container">
        <span className="board__message">{message}</span>
      </div>
      {cells.map((cell) => (
        <div
          key={cell.id}
          className="board__cell"
          onClick={() => playerMoveHandler(cell.id)}
        >
          <Circle cell={cell} />
        </div>
      ))}
      <ResultBox
        player1={player1}
        player2={player2}
        setPlayers={setPlayers}
        setCells={setCells}
        result={result}
        setResult={setResult}
      />
    </div>
  );
};

export default Board;
