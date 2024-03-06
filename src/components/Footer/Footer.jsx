import { Contact2, Heart, Inbox, Search } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* // Desktop */}
      <div className="hidden md:flex h-96 bg-gray-100">
        <div className="flex flex-col m-8  w-full ">
          <div className=" flex justify-between m-8 pb-10 w-[80%] border-gray-300 border-b ">
            <div className="flex flex-col gap-2 ">
              <a href="">
                <p className="font-bold">Support</p>
              </a>
              <a href="">
                <p className="hover:underline">Get help with a safety issue</p>
              </a>
              <a href="">
                <p className="hover:underline">AirCover</p>
              </a>
              <a href="">
                <p className="hover:underline">Anti-discrimination</p>
              </a>
              <a href="">
                <p className="hover:underline">Disability Support</p>
              </a>
              <a href="">
                <p className="hover:underline">Cancellation Option</p>
              </a>
              <a href="">
                <p className="hover:underline">Report neighbourhood concern</p>
              </a>
            </div>

            <div className="flex flex-col gap-2 ">
              <a href="">
                <p className="font-bold">Support</p>
              </a>
              <a href="">
                <p className="hover:underline">Get help with a safety issue</p>
              </a>
              <a href="">
                <p className="hover:underline">AirCover</p>
              </a>
              <a href="">
                <p className="hover:underline">Anti-discrimination</p>
              </a>
              <a href="">
                <p className="hover:underline">Disability Support</p>
              </a>
              <a href="">
                <p className="hover:underline">Cancellation Option</p>
              </a>
              <a href="">
                <p className="hover:underline">Report neighbourhood concern</p>
              </a>
            </div>

            <div className="flex flex-col gap-2 ">
              <a href="">
                <p className="font-bold">Support</p>
              </a>
              <a href="">
                <p className="hover:underline">Get help with a safety issue</p>
              </a>
              <a href="">
                <p className="hover:underline">AirCover</p>
              </a>
              <a href="">
                <p className="hover:underline">Anti-discrimination</p>
              </a>
              <a href="">
                <p className="hover:underline">Disability Support</p>
              </a>
              <a href="">
                <p className="hover:underline">Cancellation Option</p>
              </a>
              <a href="">
                <p className="hover:underline">Report neighbourhood concern</p>
              </a>
            </div>
          </div>

          <p className="">
            © 2024 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details
          </p>
        </div>
      </div>

      {/* //Mobile Footer */}
      <div className="sticky bottom-0 z-30 flex gap-5 items-center justify-center h-16 bg-white border-t md:hidden">
        <div className="flex flex-col items-center">
          <Search strokeWidth={1.5} color="red" />
          <span className="text-xs font-bold text-pink-600">Search</span>
        </div>
        <div className="flex flex-col items-center">
          <Heart strokeWidth={1.5} color="gray" />
          <span className="text-xs font-bold text-gray-500">Wishlist</span>
        </div>
        <div className="flex flex-col items-center">
          <Inbox strokeWidth={1.5} color="gray" />
          <span className="text-xs font-bold text-gray-500">Inbox</span>
        </div>
        <div className="flex flex-col items-center">
          <Contact2 strokeWidth={1.5} color="gray" />
          <span className="text-xs font-bold text-gray-500">Profile</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
