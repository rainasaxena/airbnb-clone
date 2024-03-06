import React from "react";
import PropertyCard from "../../components/Cards/PropertyCard";
import Footer from "../../components/Footer/Footer";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-full">
        {/* left */}
        <div className="mb-5 md:px-6 w-[100%] md:w-[65%] h-screen">
          <div className=" h-full overflow-y-scroll no-scrollbar ">
            <p className="text-center md:text-left mt-6 text-sm font-bold">
              Over 1,000 places within map area
            </p>

            <div className="flex flex-wrap items-start justify-center  md:justify-between">
              {/* card */}
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </div>
          </div>
        </div>

        <div className="md:w-[35%] h-full">
          <div className="hidden md:flex items-center justify-center h-full w-full">
            <p>MAP</p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <Pagination />
      </div>
      <Footer />
    </>
  );
};

export default Home;
