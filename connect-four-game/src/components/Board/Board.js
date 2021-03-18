import { useState } from "react";
import "./board.css";

import { initializeBoard } from "../../utils/defaults";

const initialBoard = {
  cells: initializeBoard(),
};

const Board = () => {
  const [cells, setCells] = useState(initialBoard.cells);
  console.log(cells);
  return (
    <div className="board">
        {cells.map(cell => (
            <div key={cell.id} className="board__cell"></div>
        ))}
    </div>
  );
};

export default Board;
