import React, { useState } from 'react';

const destinations = [
  {
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tokyo',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'New York',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
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
    <div className="w-full max-w-2xl mx-auto py-8">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        {destinations.map((dest, idx) => (
          <div
            key={dest.name}
            className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-white text-xl font-bold">{dest.name}</h3>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {destinations.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-blue-200'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;