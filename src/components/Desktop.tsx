import { AppGrid } from "./AppGrid";
import { Taskbar } from "./Taskbar";

export const Desktop = () => (
  <div className="relative aspect-[5/4] h-2/3 overflow-hidden select-none bg-white">
    <AppGrid />

    <Taskbar />

    <img src="os2warp-bg.png" alt="background" className="h-full" />
  </div>
);
