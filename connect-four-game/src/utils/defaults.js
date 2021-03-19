export const initializeBoard = () => {
  const board = [];

  for (let index = 0; index < 42; index++) {
    const initialCell = {
      id: index,
      player: undefined,
    };
    board.push(initialCell);
  }

  return board;
};
