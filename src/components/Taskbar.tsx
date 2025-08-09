import { useState, type ReactNode } from "react";
import { NUMERIC } from "../assets/fonts/helv/variables";

import CommandsIcon from "../assets/icons/commands-folder-icon.svg?react";
import DiskIcon from "../assets/icons/disk-icon.svg?react";
import DrivesIcon from "../assets/icons/drives-icon.svg?react";
import FlashlightIcon from "../assets/icons/flashlight-icon.svg?react";
import InfoIcon from "../assets/icons/info-icon.svg?react";
import LockIcon from "../assets/icons/lock-icon.svg?react";
import PrintersIcon from "../assets/icons/printers-folder-icon.svg?react";
import SetupIcon from "../assets/icons/setup-box-icon.svg?react";
import ShutdownIcon from "../assets/icons/shutdown-icon.svg?react";
import SwitchIcon from "../assets/icons/switch-icon.svg?react";
import TrayIcon from "../assets/icons/tray-icon.svg?react";

const FontArray = (props: { text: string; fontSize?: number }) => (
  <div className="flex gap-[4px]">
    {props.text.split("").map((char, index) => {
      if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
        const Icon = NUMERIC[Number(char)];

        return (
          <Icon
            key={`font-${crypto.randomUUID()}-${index}`}
            className={`${props.fontSize ?? "h-3 aspect-[10/18]"}`}
          />
        );
      }

      return <span key={`font-${crypto.randomUUID()}-${index}`}>{char}</span>;
    })}
  </div>
);

const Button = (props: {
  trayChild?: boolean;
  icon: React.FC;
  children?: ReactNode;
}) => {
  const [pressed, setPressed] = useState(false);

  const inTray = props.trayChild ?? false;

  return (
    <button
      type="button"
      className={`relative p-[1px] ${inTray ? "h-[calc(100%+2px)] -mt-[1px] -mb-[1px]" : "h-full"} pr-1 border ${pressed ? "border-t-black border-l-black border-b-gray-200" : "border-r-black border-b-black border-t-gray-200 border-l-gray-200"}`}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      <div
        className={`flex items-center ${pressed ? "translate-x-[1px] translate-y-[1px]" : null}`}
      >
        <div className="*:h-[17px]">
          <props.icon />
        </div>

        {props.children}
      </div>
    </button>
  );
};

const ButtonImg = (props: { children: React.ReactNode }) => (
  <div className="p-1 h-full w-fit flex justify-center items-center border border-r-black border-b-black border-t-gray-200 border-l-gray-200 active:border-t-black active:border-l-black  active:border-b-gray-200 active:translate-x-[1px] active:translate-y-[1px]">
    {props.children}
  </div>
);

const ObjectTray = (props: { children: React.ReactNode }) => {
  const [pressed, setPressed] = useState(false);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Buttons in buttons aren't valid HTML
    <div
      className={`relative h-full w-full flex gap-[1px] border ${pressed ? "before: border-t-black border-l-black  border-b-gray-200" : "border-r-black border-b-black border-t-gray-200 border-l-gray-200"}`}
      onMouseDown={(event) =>
        event.target === event.currentTarget ? setPressed(true) : null
      }
      onMouseUp={() => setPressed(false)}
    >
      {props.children}
    </div>
  );
};

export const Taskbar = () => (
  <div className="absolute bottom-0 pt-[1px] flex w-full h-[25px] bg-[#cccccc]">
    <ButtonImg>
      <img src="oswarp.png" alt="oswarp-logo" className="h-3 w-16" />
    </ButtonImg>

    <Button icon={SwitchIcon} />
    <Button icon={LockIcon} />
    <Button icon={FlashlightIcon} />
    <Button icon={ShutdownIcon} />
    <Button icon={DiskIcon}>
      <FontArray text="123" />
    </Button>

    <Button icon={TrayIcon} />
    <ObjectTray>
      <Button trayChild icon={DrivesIcon} />
      <Button trayChild icon={PrintersIcon} />
      <Button trayChild icon={SetupIcon} />
      <Button trayChild icon={CommandsIcon} />
    </ObjectTray>

    <Button icon={InfoIcon} />
  </div>
);
