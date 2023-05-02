import React from "react";
import { FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ChefHeaderCard = () => {
  const chefData = useLoaderData();
  const { id, experience, image, name, likes, numRecipes } = chefData[1];
  // console.log(chefData[1]);
  return (
    <div className="w-4/5">
      <div className="bg-white w-4/5 p-4 flex justify-between sm:flex-row flex-col-reverse gap-4 sm:gap-0">
        <div className="left bg-white flex-grow">
          <div className="flex gap-4 mb-4">
            <span className="flex items-center gap-1">
              <FaHeart className="text-red-400" />
              <small>{(likes / 1000).toFixed(1)}k</small>
            </span>
            <span className="flex items-center gap-1">
              <b>recipes : {numRecipes}</b>
            </span>
          </div>
          <div className="text-4xl">{name}</div>
          <p className="my-4">
            Chef Takeshi Nakamura is a highly skilled Japanese chef with over{" "}
            <b>{experience}</b> years of experience in crafting authentic
            Japanese cuisine.
          </p>
        </div>
        <div className="right relative sm:w-52 sm:h-52 w-full flex items-center justify-center">
          <div className="w-52 h-52 sm:absolute relative sm:-right-28  overflow-hidden bg-white flex items-center justify-center rounded-full">
            <img
              style={{ height: "96%", width: "96%" }}
              className="rounded-full "
              src={image}
              alt={name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefHeaderCard;
