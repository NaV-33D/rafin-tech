import React from "react";
import products from "../data/product.js";

const Card = () => {
  return (
    <div className="flex flex-wrap gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <img
            className="w-full h-40 object-cover rounded-t-lg"
            alt={product.title}
            src={product.image}
          />
          <div className="py-3">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm pt-1 text-gray-600">{product.description}</p>

            {/* <div className="flex justify-between items-center mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                Learn More
              </button>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
