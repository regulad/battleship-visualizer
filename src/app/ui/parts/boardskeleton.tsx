import {skeletonState} from "@/app/lib/state";
import {TableRow} from "@/app/ui/parts/cells";

export default function GameboardSkeleton() {
  const boardState = skeletonState;

  return (
    <table className={"aspect-square w-full"}>
      <tbody>
      {Array(10 + 1).fill(null).map((_, i) => ( // 10 rows, 1 header row
        <TableRow rowState={i > 0 ? boardState[i - 1] : null} updateBoardState={null} rowId={i} key={i}/>
      ))}
      </tbody>
    </table>
  );
}