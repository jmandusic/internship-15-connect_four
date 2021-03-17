import { useState } from "react";
import "./game.css";

import FormPlayers from "./FormPlayers/FormPlayers";
import GameLogic from "./GameLogic/GameLogic";

const Game = () => {
  const [players, setPlayers] = useState([]);
  const [gameRun, setGameRun] = useState(false);

  return (
    <main className="game">
      {!gameRun ? (
        <FormPlayers
          addPlayer={(player) =>
            setPlayers((prevState) => [...prevState, player])
          }
          setGameRun={setGameRun}
        />
      ) : (
        <GameLogic />
      )}
    </main>
  );
};

export default Game;
