import React, { useEffect } from "react";
import Navbar from "../pages/shared/Navbar/Navbar";
import ChefHeaderCard from "../pages/ChefCard/ChefHeaderCard";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../pages/ChefCard/RecipeCard/RecipeCard";
import Footer from "../pages/shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Error404 from "../pages/Error/Error404";

const ChefLayout = () => {
  const data = useLoaderData();
  // console.log(data[0]);
  return (
    <>
      <div
        style={{ height: "600px" }}
        className="w-full bg-[url('https://i.ibb.co/JmBnbtk/homeBg.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="w-full h-full bg-black bg-opacity-40">
          <Navbar />
          <div className="h-full flex items-center justify-center">
            {data[0].length === 0 ? <Error404 /> : <ChefHeaderCard />}
          </div>
        </div>
      </div>
      {data[0].length === 0 ? (
        ""
      ) : (
        <div className="w-full flex items-center justify-center">
          <div className="w-4/5 py-20 flex flex-col flex-wrap">
            <h1 className="text-center text-4xl mb-10">Recipes</h1>
            <div className="w-full flex flex-wrap justify-center gap-3">
              {data[0].map((cardData) => (
                <RecipeCard key={cardData.recipe_id} cardData={cardData} />
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
      <Toaster />
    </>
  );
};

export default ChefLayout;
