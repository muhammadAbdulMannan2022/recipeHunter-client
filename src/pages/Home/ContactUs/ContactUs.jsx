import React from "react";
import { FaPlane } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <h1 className="text-center my-10 text-4xl">Get Updates</h1>
      <div className="w-full flex gap-2 py-10 sm:flex-row flex-col">
        <div className="left">
          <h1 className="text-3xl mb-5">
            Subscribe to the best <br /> recipes feed.
          </h1>
          <div className="flex border w-fit p-2 items-center">
            <input
              className="outline-none border-none"
              type="text"
              placeholder="Enter your email"
            />
            <span
              style={{
                width: "1px",
                height: "30px",
                background: "gray",
                marginRight: "5px",
              }}
            ></span>
            <FaPlane className="text-blue-600 text-xl hover:cursor-pointer" />
          </div>
          <p className="mt-5">
            <b>Get recipes, tips, and news delivered to your inbox.</b>
          </p>
        </div>
        <div className="right">
          <h1 className="text-3xl mb-5">Visit our store</h1>
          <p>Here you’ll find a carefully chosen kitchen inventory.</p>
          <div className="border-l-2 ps-4 my-4">
            <p>Taste of Home is America's #1 </p>
            <p>cooking magazine</p>
          </div>
          <div className="border-l-2 ps-4">
            <p>Midnight Chocolate</p>
            <p>Midnight Chocolate 2%</p>
            <p>Very Berry Strawberry</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
