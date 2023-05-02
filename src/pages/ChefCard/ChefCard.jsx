import React, { Component } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefCard = ({ chefData }) => {
  const { id, image, likes, name, numRecipes, experience } = chefData;
  return (
    <div
      style={{ width: "250px" }}
      className="bg-white rounded-lg shadow-lg my-4"
    >
      <div className="flex items-center justify-center">
        <img
          style={{ width: "100px", height: "100px" }}
          className="object-cover rounded-full mt-4"
          src={image}
          alt="Person Image"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2 text-center">{name}</h2>
        <p className="text-gray-700 mb-4">
          <b>Likes :</b> {(likes / 1000).toFixed(1)}k
        </p>
        <p className="text-gray-700 mb-4">
          <b>experience :</b> {experience} years
        </p>
        <p className="text-gray-700 mb-4">
          <b>number of recipes :</b> {numRecipes}
        </p>
        <Link
          to={`/chef/${id}`}
          className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          <button className="w-full flex items-center justify-between">
            <span>view recipes</span>{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
