'use client';

import {useQueryState} from "nuqs";
import {BoardState, CellState, initialState} from "@/app/lib/state";
import {TableRow} from "@/app/ui/cells";
import {inflate, deflate} from "pako";
import {base64ToBytes, bytesToBase64} from "byte-base64";

const ENCODER = new TextEncoder();
const DECODER = new TextDecoder();

export default function Gameboard({ boardId }: { boardId: string }) {
  const [boardState, setBoardState] = useQueryState(boardId, {
    serialize: (state) => bytesToBase64(deflate(ENCODER.encode(JSON.stringify(state)))),
    parse: (serialized) => JSON.parse(DECODER.decode(inflate(base64ToBytes(serialized)))) satisfies BoardState,
    defaultValue: [...initialState],
    history: "push",
  });

  async function updateBoardState(horizontal: number, vertical: number, cellState: CellState) {
    const newBoardState = [...boardState];
    newBoardState[vertical][horizontal] = cellState;
    await setBoardState(newBoardState);
  }

  return (
    <table className={"aspect-square w-full"}>
      <tbody>
        {Array(10 + 1).fill(null).map((_, i) => ( // 10 rows, 1 header row
          <TableRow rowState={i > 0 ? boardState[i - 1] : null} updateBoardState={updateBoardState} rowId={i} key={i}/>
        ))}
      </tbody>
    </table>
  );
}