import React from 'react'

function Hero() {
  return (
    <section className="flex items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-100 to-blue-200 text-center" id="home">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">Explore the World with Travelly</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700">Your adventure starts here. Discover breathtaking destinations and unforgettable experiences.</p>
        <a href="#destinations" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full text-lg shadow hover:bg-blue-800 transition">Get Started</a>
      </div>
    </section>
  )
}

export default Hero