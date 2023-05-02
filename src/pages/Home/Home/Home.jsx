import React from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../../ChefCard/ChefCard";

const Home = () => {
  const chefs = useLoaderData();
  console.log(chefs);
  return (
    <div className="w-full flex flex-col items-center">
      <HomeHeader />
      <div className="container flex items-center justify-center flex-col py-5">
        <h1 className="text-4xl mb-4 ">Our special Chefs</h1>

        <div className="w-full flex justify-between flex-wrap">
          {chefs.map((chef) => (
            <ChefCard chefData={chef} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
