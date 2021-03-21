import {
  checkIfSameRow,
  checkIfFourDifferentRows,
  checkIfCellsEqual,
} from "./helpFunctions";

export const checkWinHorizontal = (currentCells) => {
  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 7; column++) {
      const currentCell = currentCells[row * 7 + column];
      const nextCell = currentCells[row * 7 + column + 1];
      const nextCell2 = currentCells[row * 7 + column + 2];
      const nextCell3 = currentCells[row * 7 + column + 3];
      if (
        currentCell?.player &&
        checkIfSameRow(currentCell, nextCell, nextCell2, nextCell3) &&
        checkIfCellsEqual(currentCell, nextCell, nextCell2, nextCell3)
      ) {
        return currentCell.player;
      }
    }
  }
  return false;
};

export const checkWinVertical = (currentCells) => {
  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 7; column++) {
      const currentCell = currentCells[row * 7 + column];
      const nextCell = currentCells[row * 7 + column - 7];
      const nextCell2 = currentCells[row * 7 + column - 14];
      const nextCell3 = currentCells[row * 7 + column - 21];
      if (
        currentCell?.player &&
        checkIfFourDifferentRows(currentCell, nextCell, nextCell2, nextCell3) &&
        checkIfCellsEqual(currentCell, nextCell, nextCell2, nextCell3)
      ) {
        return currentCell.player;
      }
    }
  }
  return false;
};

export const checkWinPositiveDiagonal = (currentCells) => {
  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 7; column++) {
      const currentCell = currentCells[row * 7 + column];
      const nextCell = currentCells[row * 7 + column - 6];
      const nextCell2 = currentCells[row * 7 + column - 12];
      const nextCell3 = currentCells[row * 7 + column - 18];
      if (
        currentCell?.player &&
        checkIfFourDifferentRows(currentCell, nextCell, nextCell2, nextCell3) &&
        checkIfCellsEqual(currentCell, nextCell, nextCell2, nextCell3)
      ) {
        return currentCell.player;
      }
    }
  }
  return false;
};

export const checkWinNegativeDiagonal = (currentCells) => {
  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 7; column++) {
      const currentCell = currentCells[row * 7 + column];
      const nextCell = currentCells[row * 7 + column - 8];
      const nextCell2 = currentCells[row * 7 + column - 16];
      const nextCell3 = currentCells[row * 7 + column - 24];
      if (
        currentCell?.player &&
        checkIfFourDifferentRows(currentCell, nextCell, nextCell2, nextCell3) &&
        checkIfCellsEqual(currentCell, nextCell, nextCell2, nextCell3)
      ) {
        return currentCell.player;
      }
    }
  }
  return false;
};
