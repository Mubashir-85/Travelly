import React, { useState } from 'react';

const destinations = [
  {
    name: 'Paris',
    image: 'https://media.slidesgo.com/storage/54828593/paris-monuments1717057687.jpg', // Place images in public folder
  },
  {
    name: 'Maldives',
    image: 'https://img.freepik.com/premium-photo/maldives-paradise-scenery-tropical-aerial-landscape-island-seascape-water-villas-bungalows-beach_663265-3691.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    name: 'Tokyo',
    image: 'https://www.shutterstock.com/image-photo/tokyo-japan-city-name-modern-260nw-2590991179.jpg',
  },
  {
    name: 'New York',
    image: 'https://thumbs.dreamstime.com/b/new-york-city-name-typography-postcard-usa-modern-photo-travel-destination-text-word-title-card-266311864.jpg',
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);
  const length = destinations.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="w-full h-screen py-0">
      <div className="relative rounded-none overflow-hidden shadow-lg h-screen w-full">
        <img
          src={destinations[current].image}
          alt={destinations[current].name}
          className="w-full h-screen object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-8">
          <h3 className="text-white text-3xl font-bold">{destinations[current].name}</h3>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-4 shadow hover:bg-white"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-4 shadow hover:bg-white"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
      <div className="flex justify-center gap-3 mt-6 absolute bottom-8 left-0 w-full z-20">
        {destinations.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-blue-200'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;