import { useState } from "react";
import "./game.css";

import FormPlayers from "./FormPlayers/FormPlayers";
import GameLayout from "./GameLayout/GameLayout";

const Game = () => {
  const [players, setPlayers] = useState([]);
  const [gameRun, setGameRun] = useState(false);

  return (
    <main className="content-wrapper">
      {!gameRun ? (
        <FormPlayers
          addPlayer={(player) =>
            setPlayers((prevState) => [...prevState, player])
          }
          setGameRun={setGameRun}
        />
      ) : (
        <GameLayout
          player1={players[0]}
          player2={players[1]}
          setPlayers={setPlayers}
          gameRun={setGameRun}
        />
      )}
    </main>
  );
};

export default Game;
