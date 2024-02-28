import Gameboard from "@/app/ui/gameboard";
import BoardHeader from "@/app/ui/header";
import ResetButton from "@/app/ui/reset";
import {Suspense} from "react";
import GameboardSkeleton from "@/app/ui/skeleton";

export default function Home() {
  return (
    <main className={"h-screen w-screen p-2 flex flex-col bg-gray-100"}>
      <div className={"flex items-center justify-center"}>
        <ResetButton/>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className={"flex-auto p-8"}>
          <BoardHeader playerName={"Player 1"}/>
          <Suspense fallback={<GameboardSkeleton/>}>
            <Gameboard boardId={"l"}/>
          </Suspense>
        </div>
        <div className={"flex-auto p-8"}>
          <BoardHeader playerName={"Player 2"}/>
          <Suspense fallback={<GameboardSkeleton/>}>
            <Gameboard boardId={"r"}/>
          </Suspense>
        </div>
      </div>
    </main>
  );
}
