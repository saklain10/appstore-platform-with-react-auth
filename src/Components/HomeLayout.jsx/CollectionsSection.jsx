import React from "react";

const collections = [
  {
    id: 1,
    title: "Windows themes",
    image: "https://i.ibb.co.com/rRqshs1h/images-14.jpg",
  },
  {
    id: 2,
    title: "Racing games",
    image: "https://i.ibb.co.com/WNRP9PFh/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Creativity apps",
    image: "https://i.ibb.co.com/BxQqm4H/apps-creativity-innovation.jpg",
  },
];

const CollectionsSection = () => {
  return (
    <div className="bg-black px-6 py-10 rounded">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-xl font-semibold">Collections</h2>
        <a href="#" className="text-cyan-400 hover:underline text-sm">See all &gt;</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {collections.map((item) => (
          <div
            key={item.id}
            className="relative h-48 rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-11/12 h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-50 transition duration-300" />
            <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold z-10">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsSection;
