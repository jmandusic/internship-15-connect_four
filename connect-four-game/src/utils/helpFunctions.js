export const checkIfCellsEqual = (cell1, cell2, cell3, cell4) => {
  if (
    cell1?.player?.name === cell2?.player?.name &&
    cell3?.player?.name === cell4?.player?.name &&
    cell1?.player?.name === cell3?.player?.name
  ) {
    return true;
  }
  return false;
};

export const checkIfSameRow = (cell1, cell2, cell3, cell4) => {
  if (
    cell1.row === cell2?.row &&
    cell1.row === cell3?.row &&
    cell1.row === cell4?.row
  ) {
    return true;
  }

  return false;
};

export const checkIfFourDifferentRows = (cell1, cell2, cell3, cell4) => {
  if (
    cell1.row !== cell2?.row &&
    cell3?.row !== cell4?.row &&
    cell1.row !== cell3?.row &&
    cell2.row !== cell4?.row &&
    cell1.row !== cell4?.row &&
    cell2?.row !== cell3?.row
  ) {
    return true;
  }

  return false;
};
