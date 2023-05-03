import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Error404 = () => {
  return (
    <>
      <div className="h-full flex items-center justify-center py-5 flex-col">
        <div className="flex items-center justify-center flex-col">
          <img
            style={{ maxWidth: "400px" }}
            src="https://cdn-icons-png.flaticon.com/512/580/580185.png"
            alt=""
          />
          <h1 className="text-5xl text-red-600">404 - Page not Found</h1>
        </div>
      </div>
    </>
  );
};
export const Errors = () => {
  return (
    <>
      <div className="w-full sticky top-0 bg-black">
        <Navbar />
      </div>
      <Error404 />
      <Footer />
    </>
  );
};
export default Error404;
