import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex px-10 py-3 bg-gray-100 shadow-lg">
      <a href="/" className="inline-block text-gray-800 text-xl py-1 px-2 font-bold">JobSaver</a>
      <a href="/logout" className="inline-block text-gray-800 text-lg py-1 px-3 self-center rounded-md ml-auto hover:bg-gray-800 hover:text-gray-100 transition delay-75 duration-500 ease-in-out">Logout</a>
    </nav>
  )
}

export default Navbar;