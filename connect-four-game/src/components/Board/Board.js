import { useState } from "react";
import "./board.css";

import Circle from "./Circle";
import { initializeBoard } from "../../utils/defaults";

const initialBoard = {
  cells: initializeBoard(),
};

const Board = ({ player1, player2, setPlayers, gameRun }) => {
  const [cells, setCells] = useState(initialBoard.cells);

  const cellStateHandler = (cellId) => {
    if (player1.current) {
      setCells((prevState) => {
        const newCells = [...prevState];
        const updatedCell = { ...prevState[cellId] };

        updatedCell.player = player1;
        newCells[cellId] = updatedCell;

        return newCells;
      });
    } else {
      setCells((prevState) => {
        const newCells = [...prevState];
        const updatedCell = { ...prevState[cellId] };

        updatedCell.player = player2;
        newCells[cellId] = updatedCell;

        return newCells;
      });
    }
  };


  const playerMoveHandler = (id) => {
    const columnId = id % 7;
    for (let cellId = columnId + 5 * 7; cellId > -1; cellId -= 7) {
      if (!cells[cellId]?.player) {
        cellStateHandler(cellId);
        break;
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

  return (
    <div className="board">
      {cells.map((cell) => (
        <div
          key={cell.id}
          className="board__cell"
          onClick={() => playerMoveHandler(cell.id)}
        >
          <Circle cell={cell} />
        </div>
      ))}
    </div>
  );
};

export default Board;
