import EmptyLoader from "next/dist/build/webpack/loaders/empty-loader";

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

export const initialState = [
    [CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty],
    [CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty],
    [CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty],
    [CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty],
    [CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty],
    [CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty],
    [CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty],
    [CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty],
    [CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty],
    [CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty],
    [CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty, CellState.Empty],
] satisfies BoardState as BoardState;
