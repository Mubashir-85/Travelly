import React from 'react'

function Navbar() {
  return (
     <nav className="flex justify-between items-center px-8 py-4 bg-white shadow sticky top-0 z-10">
      <div className="text-2xl font-bold text-blue-600 tracking-wide">Travelly</div>
      <ul className="flex gap-8 list-none m-0">
        <li><a href="/" className="text-gray-700 hover:text-blue-600 text-lg">Home</a></li>
        <li><a href="/destinations" className="text-gray-700 hover:text-blue-600 text-lg">Destinations</a></li>
        <li><a href="/about" className="text-gray-700 hover:text-blue-600 text-lg">About</a></li>
        <li><a href="/contact" className="text-gray-700 hover:text-blue-600 text-lg">Contact</a></li>
      </ul>
    </nav>
   
  )
}

export default Navbar