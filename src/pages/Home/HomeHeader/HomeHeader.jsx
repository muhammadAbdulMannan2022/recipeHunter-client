import React from "react";
import Navbar from "../../shared/Navbar/Navbar";

const HomeHeader = () => {
  return (
    <div
      style={{ height: "600px" }}
      className="bg-[url('https://i.ibb.co/JmBnbtk/homeBg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full h-full bg-black bg-opacity-40">
        <Navbar />
        <div className="h-full flex items-center justify-center">
          <span className="text-center lg:text-5xl ">
            WELCOME TO EASY FOOD <br />
            RECIPE
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
