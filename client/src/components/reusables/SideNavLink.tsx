import React from 'react';

interface NavLink {
  name: string;
}

const SideNavLink = ({name}: NavLink) => {
  return (
    <button className="block py-8 text-white bg-gray-600 font-bold">
      {name === "Applications" && <i className="fas fa-file mr-2 text-lg"></i>}
      {name === "Interviews" && <i className="fas fa-handshake mr-2 text-lg"></i>}
      {name === "Network" && <i className="fas fa-network-wired mr-2 text-lg"></i>}
      <span id={`nav-link-${name}`}>{name}</span>
    </button>
  );
}

export default SideNavLink;