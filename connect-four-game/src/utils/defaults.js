export const initializePlayers = () => {
  const player1 = {
    name: "",
    color: "red",
    wins: 0,
    current: true,
  };
  const player2 = {
    name: "",
    color: "yellow",
    wins: 0,
    current: false,
  };

  return [player1, player2];
};

export const initializeBoard = () => {
  const board = [];

  for (let index = 0; index < 42; index++) {
    const initialCell = {
      id: index,
      row: Math.trunc(index / 7),
      column: index % 7,
      player: undefined,
    };
    board.push(initialCell);
  }

  return board;
};

export const gameStateEnum = {
  PLAYING: "PLAYING",
  WINPLAYER1: "Player 1 won the game !!!",
  WINPLAYER2: "Player 2 won the game !!!",
  DRAW: "DRAW",
};
