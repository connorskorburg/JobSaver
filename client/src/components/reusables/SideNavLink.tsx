import React from 'react';

interface NavLink {
  name: string;
  active: boolean;
}

const SideNavLink = ({name, active}: NavLink) => {
  return (

    <button
      className={`block py-8 font-bold transition delay-50 duration-500 focus:outline-none
                ${active && 'text-white bg-gray-600 hover:text-gray-100 hover:bg-gray-800'}
                ${active === false && 'text-gray-100 bg-gray-800 hover:text-white hover:bg-gray-600'}`
      }
    >
      {name === "Applications" && <i className="fas fa-file mr-2 text-lg"></i>}
      {name === "Interviews" && <i className="fas fa-handshake mr-2 text-lg"></i>}
      {name === "Network" && <i className="fas fa-network-wired mr-2 text-lg"></i>}
      <span id={`nav-link-${name}`}>{name}</span>
    </button>
  );
}

export default SideNavLink;