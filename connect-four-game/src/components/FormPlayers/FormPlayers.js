import { useState } from "react";
import "./formPlayers.css";

import { initializePlayers } from "../../utils/defaults";

const initialPlayer = {
  player1: initializePlayers()[0],
  player2: initializePlayers()[1],
};

const FormPlayers = ({ addPlayer, setGameRun }) => {
  const [playerOne, setPlayerOne] = useState(initialPlayer.player1);
  const [playerTwo, setPlayerTwo] = useState(initialPlayer.player2);
  const [errorMessage, setErrorMessage] = useState("");

  const playerOneNameHandler = (e) => {
    setPlayerOne((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const playerTwoNameHandler = (e) => {
    setPlayerTwo((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!playerOne.name) {
      setErrorMessage("Player One name is not defined");
      return;
    }

    if (!playerTwo.name) {
      setErrorMessage("Player Two name is not defined");
      return;
    }

    if (playerOne.name.trim().length < 3 || playerTwo.name.trim().length < 3) {
      setErrorMessage("Player name requires min 3 characters");
      return;
    }

    if (
      playerOne.name.trim().length > 12 ||
      playerTwo.name.trim().length > 12
    ) {
      setErrorMessage("Player name requires max 12 characters");
      return;
    }

    if (
      playerOne.name.trim().toLowerCase() ===
      playerTwo.name.trim().toLowerCase()
    ) {
      setErrorMessage("Player names must be different");
      return;
    }

    addPlayer(playerOne);
    addPlayer(playerTwo);
    setGameRun(true);

    setErrorMessage("");
  };

  return (
    <section className="section__players">
      <h1 className="section__title">Connect 4</h1>

      <form onSubmit={handleSubmit} className="section__form">
        <label className="form__label">Enter Player One name:</label>
        <input
          className="form__input"
          placeholder="Player One..."
          name="player1"
          value={playerOne.name}
          onChange={playerOneNameHandler}
        />

        <label className="form__label">Enter Player Two name:</label>
        <input
          className="form__input"
          placeholder="Player Two..."
          value={playerTwo.name}
          onChange={playerTwoNameHandler}
        />

        <button type="submit" className="form__submit-button">
          Start
        </button>
      </form>
      {errorMessage && (
        <span className="form__error-message">{errorMessage}</span>
      )}
    </section>
  );
};

export default FormPlayers;
