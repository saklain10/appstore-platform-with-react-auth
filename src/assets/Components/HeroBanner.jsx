import React, { useEffect, useState } from "react";

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3); // 3 images
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero bg-amber-300 rounded">
      
      <div className="hero-content flex-col lg:flex-row-reverse h-96">

        <div className="w-64 h-64 overflow-hidden rounded shadow border flex items-center justify-center">
          {currentIndex === 0 && (
            <img
              src="https://i.ibb.co.com/Xk3cLJHd/images-12.jpg"
              alt="App 1"
              className="w-full h-full object-cover transition-all duration-700"
            />
          )}
          {currentIndex === 1 && (
            <img
              src="https://i.ibb.co.com/27ZTxJ2S/images-11.jpg"
              alt="App 2"
              className="w-full h-full object-cover transition-all duration-700"
            />
          )}
          {currentIndex === 2 && (
            <img
              src="https://i.ibb.co.com/9mw0QVg3/b2.jpg"
              alt="App 3"
              className="w-full h-full object-cover transition-all duration-700"
            />
          )}
        </div>

        {/* Text */}
        <div>
          <h1 className="text-5xl font-bold">AppStore Highlights!!</h1>
          <p className="py-6">
            Discover the most trending apps right now! Explore, install, and enjoy an enhanced mobile experience.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;



