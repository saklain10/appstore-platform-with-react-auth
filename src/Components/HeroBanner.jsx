import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner = () =>{
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out"
  };

  const slideData = [
    {
      id: 1,
      name: "BrainBoost",
      thumbnail: "https://i.ibb.co/zWymwcFg/7l.png",
      title: "Trending Picks",
      desc: "Most loved apps by our AppGallery users."
    },
    {
      id: 2,
      name: "Programming Hero",
      thumbnail: "https://i.ibb.co/qFY944gh/1l.png",
      title: "Top Rated",
      desc: "Highest rated apps by the community."
    },
    {
      id: 3,
      name: "Battle Royale Pro",
      thumbnail: "https://i.ibb.co/ym8vcG2V/11l.png",
      title: "New Arrivals",
      desc: "Recently added apps you shouldn’t miss."
    }
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white mb-10"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1545239351-ef35f43d514b')",
        minHeight: "400px"
      }}
    >
      <div className="absolute inset-0 bg-opacity-60" />

      <div className="relative z-10 text-center pt-8">
        <h2 className="text-3xl font-bold mb-1">Featured Apps</h2>
        <p className="text-base max-w-xl mx-auto">
          Discover trending, top-rated, and fresh apps curated just for you.
        </p>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 pt-6 pb-8">
        <Slider {...settings}>
          {slideData.map((app) => (
            <div key={app.id} className="px-2">
              <div className="bg-white rounded-md overflow-hidden shadow text-black flex flex-col items-center justify-center p-4 h-[320px]">
                <img
                  src={app.thumbnail}
                  alt={app.name}
                  className="h-40 object-contain mb-3"
                />
                <h3 className="text-lg font-bold text-green-600 mb-1">{app.title}</h3>
                <p className="text-sm text-gray-700 text-center mb-1">{app.desc}</p>
                <h4 className="text-base font-medium text-blue-700">{app.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HeroBanner;
