import {CellState, nextCellState} from "@/app/lib/state";
import {clsx} from "clsx";

function indexToLetter(index: number): string {
  if (index < 0 || index >= 26) {
    throw new Error("Invalid index");
  }
  return String.fromCharCode(65 + index); // A = 65
}

function BaseCell({children}: { children?: React.ReactNode }) {
  return (
    <td className={"aspect-square p-1 text-center"}>
      {children}
    </td>
  );
}

type BoardStateUpdater = (horizontal: number, vertical: number, cellState: CellState) => Promise<void>;

function BlankCell() {
  return (
    <BaseCell/>
  );
}

function HeaderCell({text}: { text: string }) {
  return (
    <BaseCell>
      <p className={"font-bold align-middle text-center color text-gray-400 w-0 p-4"}>{text}</p>
    </BaseCell>
  );
}

function GameCell({horizontal, vertical, cellState, updateBoardState}: {
  horizontal: number,
  vertical: number,
  cellState: CellState,
  updateBoardState: BoardStateUpdater | null
}) {
  const nextState = nextCellState(cellState);
  let extraParams;
  if (updateBoardState != null) {
    let boardStateUpdater = updateBoardState.bind(null, horizontal, vertical, nextState);
    extraParams = {
      onClick: boardStateUpdater
    }
  } else {
    extraParams = {};
  }
  return (
    <BaseCell>
      <div className={clsx(
        "w-full h-full py-2 rounded aspect-square flex justify-center items-center",
        {
          "bg-gray-200": cellState === CellState.Empty,
          "bg-red-500": cellState === CellState.Hit,
          "bg-gray-100": cellState === CellState.Miss,
          "bg-gray-500": cellState === CellState.Ship,
          "animate-pulse": updateBoardState == null, // this is a skeleton
        }
      )} {...extraParams}>
        {/* small dot */}
        <div className={clsx(
          "w-1/3 h-1/3 p-1 rounded-full",
          {
            "bg-gray-300": cellState === CellState.Empty,
            "bg-red-600": cellState === CellState.Hit,
            "bg-gray-200": cellState === CellState.Miss,
            "bg-gray-600": cellState === CellState.Ship,
          }
        )}/>
      </div>
    </BaseCell>
  );
}

export function TableRow({rowState, rowId, updateBoardState}: {
  rowState: CellState[] | null,
  rowId: number,
  updateBoardState: BoardStateUpdater | null
}) {
  if (rowState == null) {
    return (
      <tr className={`h-[${1 / 11}%]`}>
        <BlankCell/>
        {Array(10).fill(null).map((_, i) => (
          <HeaderCell text={(i + 1).toString()} key={i}/>
        ))}
      </tr>
    );
  }

  const rowIndex = rowId - 1;

  return (
    <tr>
      <HeaderCell text={indexToLetter(rowIndex)}/>
      {rowState.map((cellState, i) => {
        return <GameCell horizontal={i} vertical={rowIndex} cellState={cellState} updateBoardState={updateBoardState}
                         key={i}/>;
      })}
    </tr>
  );
}
