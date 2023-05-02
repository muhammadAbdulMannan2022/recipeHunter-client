import React, { useEffect } from "react";
import Navbar from "../pages/shared/Navbar/Navbar";
import ChefHeaderCard from "../pages/ChefCard/ChefHeaderCard";
import { useLoaderData } from "react-router-dom";

const ChefLayout = () => {
  const data = useLoaderData();
  console.log(data[0]);
  return (
    <div
      style={{ height: "600px" }}
      className="w-full bg-[url('https://i.ibb.co/JmBnbtk/homeBg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full h-full bg-black bg-opacity-40">
        <Navbar />
        <div className="h-full flex items-center justify-center">
          <ChefHeaderCard />
        </div>
      </div>
    </div>
  );
};

export default ChefLayout;
