export const initializeBoard = () => {
  const board = [];

  for (let index = 0; index < 42; index++) {
    let noPlayer = {
      id: index,
      color: "white",
    };
    board.push(noPlayer);
  }

  return board;
};
