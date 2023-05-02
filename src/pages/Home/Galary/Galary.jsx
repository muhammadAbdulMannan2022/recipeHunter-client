import React from "react";

const Galary = () => {
  const images = [
    "https://i.ibb.co/s3WRrsB/mixed-sushi-rolls-plate.jpg",
    "https://i.ibb.co/wp4JC3r/side-view-mix-sushi-rolls-tray-with-ginger-wasabi.jpg",
    "https://i.ibb.co/qFvxXV3/mixed-sushi-set-japanese-food.jpg",
    "https://i.ibb.co/D51GY51/korean-food-kim-bap-steamed-rice-with-vegetables-seaweed.jpg",
    "https://i.ibb.co/hf0p0Mr/sushi-set-served-table.jpg",
    "https://i.ibb.co/wp4JC3r/side-view-mix-sushi-rolls-tray-with-ginger-wasabi.jpg",
    "https://i.ibb.co/qFvxXV3/mixed-sushi-set-japanese-food.jpg",
  ];
  return (
    <div className="my-10 flex flex-col">
      <h1 className="text-4xl mb-10 text-center">Galary</h1>
      <div className="flex flex-wrap -mx-4 justify-center">
        {images.map((imageUrl, id) => {
          const key = Math.random() * 10;
          return (
            <img
              key={key.toString()}
              src={imageUrl}
              alt=""
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Galary;
