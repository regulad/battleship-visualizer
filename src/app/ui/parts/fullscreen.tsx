import {FullScreenHandle} from "react-full-screen";

export default function FullScreenButton({handle}: { handle: FullScreenHandle | null }) {
  let extraProps;
  if (handle) {
    extraProps = {
      onClick: async () => {
        if (handle && handle.active) {
          await handle.exit();
        } else if (handle) {
          await handle.enter();
        }
      }
    }
  } else {
    extraProps = {};
  }
  return (
    <a {...extraProps} className={"font-black italic bg-white rounded-full py-2 px-20"}>Fullscreen</a>
  );
}