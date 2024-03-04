import ResetButton from "@/app/ui/parts/reset";
import FullScreenButton from "@/app/ui/parts/fullscreen";
import BoardHeader from "@/app/ui/parts/header";
import GameboardSkeleton from "@/app/ui/parts/boardskeleton";

export function ServerVersion() {
  const fullscreenHandle = null;

  return (
    <>
      <div className={"flex items-center justify-center space-x-4"}>
        <ResetButton/>
        <FullScreenButton handle={fullscreenHandle}/>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className={"flex-auto p-8"}>
          <BoardHeader playerName={"Player 1"}/>=
          <GameboardSkeleton/>
        </div>
        <div className={"flex-auto p-8"}>
          <BoardHeader playerName={"Player 2"}/>
          <GameboardSkeleton/>
        </div>
      </div>
    </>
  );
}