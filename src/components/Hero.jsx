import React from "react";

export const Hero = () => {
  return (
    <div className="relative h-screen font-serif">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/premium-photo/coffee-beans-drop-splash-coffee-cup-background_28943-511.jpg"
          alt="Coffee"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 sm:px-12 md:px-24">
        <div className="text-left w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold mb-4">
            All we need is coffee
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
            Experience the difference as meticulously select Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Illum, sapiente.
          </p>
          <button className="bg-yellow-300 text-black px-4 py-2 text-center rounded-lg transition duration-300 hover:bg-white hover:text-black hover:scale-110">
            Order Now
          </button>
        </div>
        <div className="absolute bottom-16 left-6 sm:left-12 md:left-24 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-white flex justify-between">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              1K+
            </p>
            <p className="text-md sm:text-lg md:text-xl">Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              3K+
            </p>
            <p className="text-md sm:text-lg md:text-xl">Sell</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              5K+
            </p>
            <p className="text-md sm:text-lg md:text-xl">Menu</p>
          </div>
        </div>
      </div>
    </div>
  );
};
