import {Suspense} from "react";
import {ClientVersion} from "@/app/ui/main/client";
import {ServerVersion} from "@/app/ui/main/server";

export default function Home() {
  return (
    <main className={"min-h-screen w-screen p-2 flex flex-col bg-gray-100"}>
      <Suspense fallback={<ServerVersion/>}>
        <ClientVersion/>
      </Suspense>
    </main>
  );
}
