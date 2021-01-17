import React, { CSSProperties, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavLink from '../reusables/NavLink';
import { showDashboard } from '../../redux/Users/users.actions'

const SideNav = () => {  
  const dispatch = useDispatch();
  const isShowing = useSelector((state: any) => state.sideNavShowing);
  const [linkState, setLinkState] = useState({
    "Applications": true,
    "Interviews": false,
    "Network": false
  });
  console.log(isShowing, typeof isShowing);
  const handleClick = () => {
    dispatch(showDashboard());
  }
  const { Applications, Interviews, Network } = linkState;
  return (
    <nav onClick={() => handleClick()} style={navStyle} className={`side-nav ${isShowing ? "w-1/6" : "w-small" } min-h-screen bg-gray-800 shadow-lg py-5 transition-all delay-100`}>
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