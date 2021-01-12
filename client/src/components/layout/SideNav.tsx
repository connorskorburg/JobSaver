import React, { CSSProperties, useState } from 'react';
import NavLink from '../reusables/NavLink';

const SideNav = () => {  
  const [linkState, setLinkState] = useState({
    "Applications": true,
    "Interviews": false,
    "Network": false
  });
  const { Applications, Interviews, Network } = linkState;
  return (
    <nav style={navStyle} className="side-nav w-1/6 min-h-screen bg-gray-800 shadow-lg py-5 transition-all">
      <button className="nav-icon m-1 w-10 focus:outline-none mx-3">
        <div></div>
      </button>
      <section className="flex justify-center flex-col mt-10 text-md">
        <NavLink active={Applications} name="Applications" type="side" />
        <NavLink active={Interviews} name="Interviews" type="side" />
        <NavLink active={Network} name="Network" type="side" />
      </section>
    </nav>
  );
}

const navStyle: CSSProperties = {
  overflowY: 'hidden',
  minHeight: '100vh'
}

export default SideNav;