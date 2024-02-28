export enum CellState {
  Empty,
  Ship,
  Hit,
  Miss,
}

export function nextCellState(cellState: CellState): CellState {
  switch (cellState) {
    case CellState.Empty:
      return CellState.Ship;
    case CellState.Ship:
      return CellState.Hit;
    case CellState.Hit:
      return CellState.Miss;
    case CellState.Miss:
      return CellState.Empty;
  }
}

export type BoardState = readonly CellState[][];

export const initialState = Array(10).fill(null).map(() => Array(10).fill(CellState.Empty)) as BoardState;
export const skeletonState = Array(10).fill(null).map(() => Array(10).fill(CellState.Miss)) as BoardState;
