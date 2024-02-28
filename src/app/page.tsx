import Image from "next/image";
import Gameboard from "@/app/ui/gameboard";
import BoardHeader from "@/app/ui/header";
import ResetButton from "@/app/ui/reset";

export default function Home() {
  return (
    <main className={"h-screen w-screen p-2 flex flex-col bg-gray-100"}>
      <div className={"flex items-center justify-center"}>
        <ResetButton/>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className={"flex-auto p-8"}>
          <BoardHeader playerName={"Player 1"}/>
          <Gameboard boardId={"l"}/>
        </div>
        <div className={"flex-auto p-8"}>
          <BoardHeader playerName={"Player 2"}/>
          <Gameboard boardId={"r"}/>
        </div>
      </div>
    </main>
  );
}
