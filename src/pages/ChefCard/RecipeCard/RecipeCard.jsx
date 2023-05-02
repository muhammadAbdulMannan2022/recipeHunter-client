import React from "react";
import { FaStar } from "react-icons/fa";

const RecipeCard = ({ cardData }) => {
  const { recipe_id, name, ingredients, method, rating, image_url } = cardData;
  return (
    <div
      style={{ width: "90%" }}
      className="rounded overflow-hidden shadow-lg flex"
    >
      <div className="w-1/3 h-60 overflow-hidden flex items-center justify-center">
        <img src={image_url} alt="card" className="w-full h-full" />
      </div>
      <div className="px-6 py-4 flex flex-col w-3/4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          <b>ingredients : </b>
          {ingredients.slice(0, 4).map((i) => `${i}, `)} ........
        </p>
        <p>
          <b>method : </b>
          {method.slice(0, 200)} .........
        </p>
        <div className="mt-5 flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            See full recipe
          </button>
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-500" /> {rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
