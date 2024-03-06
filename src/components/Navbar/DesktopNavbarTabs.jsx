import React from "react";
import {
  BedDouble,
  Blinds,
  Coffee,
  Fence,
  Home,
  KeyRound,
  LandPlot,
  TentTree,
  Waves,
} from "lucide-react";

const DesktopNavbarTabs = () => {
  return (
    <>
      <div className="flex gap-10 divide-x-2">
        <div className="flex flex-col items-center">
          <Home strokeWidth={1.5} />
          <span className="text-xs font-bold ">Your searches</span>
        </div>

        <div className="pl-10 flex flex-col items-center">
          <BedDouble strokeWidth={1.5} color="gray" />
          <span className="text-xs font-bold text-gray-500">Rooms</span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Waves strokeWidth={1.5} color="gray" />
        <span className="text-xs font-bold text-gray-500">Swimming Pools</span>
      </div>
      <div className="flex flex-col items-center">
        <Coffee strokeWidth={1.5} color="gray" />
        <span className="text-xs font-bold text-gray-500">Bed & Breakfast</span>
      </div>
      <div className="flex flex-col items-center">
        <Fence strokeWidth={1.5} color="gray" />
        <span className="text-xs font-bold text-gray-500">Farms</span>
      </div>

      <div className="flex flex-col items-center">
        <Blinds strokeWidth={1.5} color="gray" />
        <span className="text-xs font-bold text-gray-500">Amazing Views</span>
      </div>

      <div className="flex flex-col items-center">
        <TentTree strokeWidth={1.5} color="gray" />
        <span className="text-xs font-bold text-gray-500">Countryside</span>
      </div>

      <div className="flex flex-col items-center">
        <KeyRound strokeWidth={1.5} color="gray" />
        <span className="text-xs font-bold text-gray-500">New</span>
      </div>

      <div className="flex flex-col items-center">
        <LandPlot strokeWidth={1.5} color="gray" />
        <span className="text-xs font-bold text-gray-500">Golfing</span>
      </div>
    </>
  );
};

export default DesktopNavbarTabs;
