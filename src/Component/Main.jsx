import React from 'react';

const featuredDestinations = [
  {
    name: 'Paris',
    image: 'https://media.slidesgo.com/storage/54828593/paris-monuments1717057687.jpg',
    description: 'The city of lights, romance, and art.',
  },
  {
    name: 'Maldives',
    image: 'https://img.freepik.com/premium-photo/maldives-paradise-scenery-tropical-aerial-landscape-island-seascape-water-villas-bungalows-beach_663265-3691.jpg?semt=ais_hybrid&w=740&q=80',
    description: 'Tropical paradise with crystal clear waters.',
  },
  {
    name: 'Tokyo',
    image: 'https://www.shutterstock.com/image-photo/tokyo-japan-city-name-modern-260nw-2590991179.jpg',
    description: 'A vibrant blend of tradition and technology.',
  },
  {
    name: 'New York',
    image: 'https://thumbs.dreamstime.com/b/new-york-city-name-typography-postcard-usa-modern-photo-travel-destination-text-word-title-card-266311864.jpg',
    description: 'The city that never sleeps.',
  },
];

const services = [
  {
    title: 'Custom Itineraries',
    icon: '🗺️',
    description: 'Personalized travel plans tailored to your interests.',
  },
  {
    title: 'Hotel Booking',
    icon: '🏨',
    description: 'Best deals on hotels worldwide.',
  },
  {
    title: 'Guided Tours',
    icon: '🧑‍🤝‍🧑',
    description: 'Expert guides for memorable experiences.',
  },
  {
    title: '24/7 Support',
    icon: '📞',
    description: 'We’re here for you anytime, anywhere.',
  },
];

function Main() {
  return (
    <main>
      
      

      {/* Featured Destinations */}
      <section id="destinations" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDestinations.map((dest, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{dest.name}</h3>
                  <p className="text-gray-600">{dest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;