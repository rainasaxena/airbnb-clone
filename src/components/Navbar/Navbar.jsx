import React, { useState } from "react";
import { Globe, Menu, SearchIcon, SlidersHorizontalIcon } from "lucide-react";
import airbnb from "../../assets/airbnb.svg";
import DesktopNavbarTabs from "./DesktopNavbarTabs";
import Dropdown from "../Dropdown/Dropdown";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleDropdownClick = (path) => {
    setIsDropdownOpen(!isDropdownOpen);
    navigate(`${path}`);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden">
        <div className="border-b flex items-center justify-center bg-white h-24 w-screen">
          <div className=" flex items-center justify-center gap-3 mx-5 h-14 w-full ">
            <div className="flex items-center justify-start flex-1 bg-gray-100 h-full rounded-full ">
              <SearchIcon className="mx-3" />
              <div className="text-xs flex flex-col">
                <p className="font-bold">Map Area</p>
                <p className="">5-6 Mar - 2 Guests</p>
              </div>
            </div>
            <div className="flex-2 bg-white h-max p-2 rounded-full border-solid border border-gray-500">
              <SlidersHorizontalIcon color="black" />
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav className="hidden md:block sticky top-0 z-30 bg-white">
        <div className="h-20 border-b border-gray-300">
          <div className="flex items-center justify-between p-3 mx-8 h-full">
            <div className="h-full w-max py-2">
              <img src={airbnb} alt="" className="h-full object-cover" />
            </div>
            <div className="shadow-lg p-2 flex items-center justify-center divide-x-2 bg-white rounded-full border">
              <p className="p-2 font-semibold">Map area</p>
              <p className="p-2 font-semibold">5-6 Mar</p>
              <div className="flex items-center justify-center gap-3">
                <p className="px-2 font-light text-gray-500">Add Guests</p>
                <div className="h-full p-3 rounded-full bg-red-600">
                  <SearchIcon color="white" size={16} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white">
              <p className="hover:bg-gray-100 p-3 rounded-full">
                Airbnb to your home
              </p>
              <div className="rounded-full h-full hover:bg-gray-100 p-3">
                <Globe size={20} />
              </div>
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="items-center justify-center p-2 px-3 flex gap-2 h-full border rounded-full hover:shadow-lg"
              >
                <Menu size={32} className="items-center flex-1 w-full" />
                <div className="flex-1 p-2 bg-black h-max w-full rounded-full text-white text-center text-[12px]">
                  R
                </div>
              </div>
            </div>
          </div>
        </div>
        {isDropdownOpen && (
          <Dropdown
            children={
              <ul className="text-left border-b">
                <li className="p-2 cursor-pointer hover:bg-gray-100 font-bold">
                  Message
                </li>
                <li className="p-2 cursor-pointer hover:bg-gray-100 font-bold">
                  Notifications
                </li>
                <li className="p-2 cursor-pointer hover:bg-gray-100 font-bold">
                  Trips
                </li>
                <li className="p-2 cursor-pointer hover:bg-gray-100 font-bold">
                  Wishlist
                </li>

                <li className="p-2 cursor-pointer hover:bg-gray-100">
                  Airbnb Your Home
                </li>
                <li className="p-2 cursor-pointer hover:bg-gray-100 ">
                  Account
                </li>
                <li className="p-2 cursor-pointer hover:bg-gray-100 ">
                  Helpcenter
                </li>
                <li className="p-2 cursor-pointer hover:bg-gray-100 ">
                  Logout
                </li>
              </ul>
            }
          />
        )}

        <div className="flex border-b h-20">
          <div className="flex items-center px-6 gap-10 flex-1 h-full">
            {/* Icons */}
            <DesktopNavbarTabs />
          </div>

          {/* beside icons */}
          <div className="flex items-center p-4 px-8 gap-4 flex-2  h-full">
            <div className="p-3 flex items-center justify-center gap-2 h-full w-max border border-gray-200 rounded-xl">
              <SlidersHorizontalIcon strokeWidth={1.5} />
              <span className="text-xs font-bold">Filters</span>
            </div>

            <div className="p-3 flex items-center justify-center gap-2 h-full w-max border border-gray-200 rounded-xl">
              <span className="text-xs font-bold">
                Display before total taxes
              </span>

              <label class="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  class="sr-only peer focus:outline-none"
                />
                <div class="relative w-10 h-6 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-4 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white   after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
