import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const RecipeCard = ({ cardData }) => {
  const [showDot, setShowDot] = useState(true);
  const [fullRecipe, setFullRecipe] = useState([]);
  const [slicedRecipeIng, setSlicedRecipeIng] = useState([]);
  const [slicedRecipeMethod, setSlicedRecipeMethod] = useState([]);
  const { recipe_id, name, ingredients, method, rating, image_url } = cardData;
  useEffect(() => {
    setFullRecipe(cardData);
    setSlicedRecipeIng(ingredients.slice(0, 4));
    setSlicedRecipeMethod(method.slice(0, 200));
  }, []);
  const seeFullRecipy = (e) => {
    setSlicedRecipeIng(fullRecipe?.ingredients);
    setSlicedRecipeMethod(fullRecipe?.method);
    setShowDot(false);
  };
  return (
    <div
      style={{ width: "90%" }}
      className="rounded overflow-hidden shadow-lg flex flex-col sm:flex-row"
    >
      <div className="sm:w-1/3 w-full h-60 overflow-hidden flex items-center justify-center">
        <img src={image_url} alt="card" className="w-full h-full" />
      </div>
      <div className="px-6 py-4 flex flex-col w-3/4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          <b>ingredients : </b>
          {slicedRecipeIng.map((i, id) => (
            <span key={id}>{i}, </span>
          ))}{" "}
          {showDot && "........"}
        </p>
        <p>
          <b>method : </b>
          {slicedRecipeMethod} {showDot && "........"}
        </p>
        <div className="mt-5 flex justify-between">
          <button
            onClick={() => seeFullRecipy(recipe_id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
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
