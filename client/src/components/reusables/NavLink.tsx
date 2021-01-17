import React from 'react';
import { showDashboard } from '../../redux/Users/users.actions'
import { useSelector } from 'react-redux';
interface NavLinkInterface {
  name: string;
  active: boolean;
  type: string;
}

const handleClick = (clickType: string) => {
  showDashboard();
}

const NavLink = ({name, active, type}: NavLinkInterface) => {
  const isShowing = useSelector((state: any) => state.sideNavShowing);
  return (
    <button
      onClick={() => handleClick(name)}
      className={`py-8 font-bold transition delay-100 duration-500 focus:outline-none
                ${active && 'text-white bg-gray-600 hover:text-gray-200 hover:bg-gray-800'}
                ${active === false && 'text-gray-200 bg-gray-800 hover:text-white hover:bg-gray-600'}
                ${type === 'bottom' && 'w-1/3 py-2 inline-block'}
                ${type === 'side' && 'py-8'}`
      }
    >
      {name === "Applications" && <i className="fas fa-file mr-2 text-lg"></i>}
      {name === "Interviews" && <i className="fas fa-handshake mr-2 text-lg"></i>}
      {name === "Network" && <i className="fas fa-network-wired mr-2 text-lg"></i>}
      <span className="transition-all delay-150" id={`nav-link-${name}`}>{(type === 'side' && isShowing) && name}</span> 
    </button>
  );
}

export default NavLink;