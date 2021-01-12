import React from 'react';

interface NavLinkInterface {
  name: string;
  active: boolean;
  type: string;
}

const NavLink = ({name, active, type}: NavLinkInterface) => {
  
  return (
    <button
      className={`py-8 font-bold transition delay-50 duration-500 focus:outline-none
                ${active && 'text-white bg-gray-600 hover:text-gray-200 hover:bg-gray-800'}
                ${active === false && 'text-gray-200 bg-gray-800 hover:text-white hover:bg-gray-600'}
                ${type === 'bottom' && 'w-1/3 py-2 inline-block'}
                ${type === 'side' && 'py-8'}`
      }
    >
      {name === "Applications" && <i className="fas fa-file mr-2 text-lg"></i>}
      {name === "Interviews" && <i className="fas fa-handshake mr-2 text-lg"></i>}
      {name === "Network" && <i className="fas fa-network-wired mr-2 text-lg"></i>}
      {type === 'side' && <span id={`nav-link-${name}`}>{name}</span> }
    </button>
  );
}

export default NavLink;