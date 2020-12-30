import React from 'react';

const SearchBar = () => {
  return (
    <div className='w-5/6 flex py-2 pr-2 bg-gray-200'>
      <i className="fas fa-search px-3 text-xl text-white self-center"></i>
      <input className="px-5 py-2 text-md block w-full focus:outline-none focus:bg-gray-100" placeholder="Search..." type="text"/>
    </div>
  )
};

export default SearchBar;