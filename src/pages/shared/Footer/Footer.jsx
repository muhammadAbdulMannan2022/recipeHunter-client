import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-10 text-center">
          簡単料理 (EASY FOOD)
        </h2>
        <div className="flex flex-wrap -mx-4 xl:flex-row sm:flex-row flex-col">
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="mb-4">
              We are a team of passionate food lovers who want to share our love
              of cooking with the world. Our recipes are inspired by our travels
              and our favorite chefs.
            </p>
            <p className="mb-4">
              Follow us on social media for more recipes and food inspiration!
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="bg-white hover:bg-gray-200 text-black font-bold p-2 rounded-full"
              >
                <FaFacebook className="text-blue-600 text-2xl" />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-gray-200 text-black font-bold p-2 rounded-full ml-4"
              >
                <FaInstagram className="text-red-600 text-2xl" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Email: info@easyfood.com</li>
              <li>Phone: 555-1234</li>
              <li>Address: 123 Main Street, Anytown, USA</li>
            </ul>
            <p className="mb-4">Have a question or suggestion? Let us know!</p>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
