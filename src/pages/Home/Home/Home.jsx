import React from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../../ChefCard/ChefCard";
import Footer from "../../shared/Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";
import Galary from "../Galary/Galary";

const Home = () => {
  const chefs = useLoaderData();
  return (
    <div className="w-full flex flex-col items-center">
      <HomeHeader />
      <div className="container flex items-center justify-center flex-col py-5">
        <h1 className="text-4xl mb-4 ">Our special Chefs</h1>

        <div className="w-full flex justify-center gap-3 flex-wrap">
          {chefs.map((chef) => (
            <ChefCard key={chef.id} chefData={chef} />
          ))}
        </div>
        <div>
          <Galary />
        </div>
        <div>
          <ContactUs />
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
