import React, { useState } from 'react';

const SearchBar = () => {
  const [focusSearchBar, setFocusSearchBar] = useState('');
  const onFocus = () => {
    console.log('hellooooo')
    setFocusSearchBar('bg-gray-300');
  };
  return (
    <div onClick={onFocus} className={`w-5/6 flex py-2 bg-gray-200 pr-2 ${focusSearchBar}`}>
      <i className="fas fa-search px-3 text-xl text-white self-center"></i>
      <input className="px-5 py-2 text-md block w-full focus:outline-none" placeholder="Search..." type="text"/>
    </div>
  )
};

export default SearchBar;