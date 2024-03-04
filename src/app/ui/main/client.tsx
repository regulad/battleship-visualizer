'use client';

import ResetButton from "@/app/ui/parts/reset";
import FullScreenButton from "@/app/ui/parts/fullscreen";
import BoardHeader from "@/app/ui/parts/header";
import Gameboard from "@/app/ui/parts/gameboard";
import GameboardSkeleton from "@/app/ui/parts/boardskeleton";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import {Suspense} from "react";

export function ClientVersion() {
  const fullscreenHandle = useFullScreenHandle();

  return (
    <>
      <div className={"flex items-center justify-center space-x-4"}>
        <ResetButton/>
        <FullScreenButton handle={fullscreenHandle}/>
      </div>
      <FullScreen handle={fullscreenHandle}
                  className="min-h-full min-w-full flex flex-row items-center justify-between bg-gray-100">
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
      </FullScreen>
    </>
  );
}

