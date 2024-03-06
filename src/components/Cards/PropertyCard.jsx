import { Star } from "lucide-react";
import React from "react";

const PropertyCard = () => {
  return (
    <div className="mt-6 w-max flex flex-col gap-2">
      <div className="h-60 w-72 object-cover rounded-xl">
        <img
          src="https://a0.muscache.com/im/pictures/6d0cf82c-7d4a-4df8-a280-92bfa55899c8.jpg?im_w=720"
          alt=""
          className="h-full w-full rounded-xl"
        />
      </div>
      <div className="flex justify-between">
        <span className="text-sm font-bold">Guest house in New Delhi</span>
        <div className="flex gap-1">
          <Star strokeWidth={1.5} size={20} />
          <span className="text-sm font-bold">New</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">
          Relaxation like never before;
        </span>
        <span className="text-sm text-gray-500">1 bed</span>
        <span className="text-sm text-gray-500">8-13 Mar</span>
        <span className="font-bold text-sm text-gray-500">
          <strike>$1233</strike> $1234
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;
