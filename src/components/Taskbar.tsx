import type { JSX } from "react";
import { lockIcon, switchIcon } from "../assets/icons/taskbar";

const Button = (props: { icon: React.FC }) => (
  <div className="relative p-0.5 h-full aspect-[6/5] border-2 border-r-black border-b-black border-t-gray-200 border-l-gray-200 active:border-t-black active:border-l-black  active:border-b-gray-200 active:translate-x-[1px] active:translate-y-[1px] *:size-[21px]">
    <props.icon />
  </div>
);

const ButtonImg = (props: { children: JSX.Element }) => (
  <div className="p-1 h-full w-fit flex justify-center items-center border-2 border-r-black border-b-black border-t-gray-200 border-l-gray-200 active:border-t-black active:border-l-black  active:border-b-gray-200 active:translate-x-[1px] active:translate-y-[1px]">
    {props.children}
  </div>
);

export const Taskbar = () => (
  <div className="absolute bottom-0 flex w-full h-7 bg-[#cccccc]">
    <ButtonImg>
      <img src="oswarp.png" alt="oswarp-logo" className="h-3" />
    </ButtonImg>

    <Button icon={switchIcon} />
    <Button icon={lockIcon} />
  </div>
);
