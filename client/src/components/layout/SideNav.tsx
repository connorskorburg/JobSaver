import React, { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavLink from '../reusables/NavLink';
import { showDashboard } from '../../redux/Users/users.actions'

const SideNav = () => {  
  const dispatch = useDispatch();
  const isSideNavShowing = useSelector((state: any) => state.sideNavShowing);
  const { applications, interviews, network } = useSelector((state: any) => state.activeContent);

  return (
    <nav style={navStyle} className={`side-nav ${isSideNavShowing ? "w-1/6" : "w-small" } min-h-screen bg-gray-800 shadow-lg py-5 transition-all delay-100`}>
      <button onClick={() => dispatch(showDashboard())} className="nav-icon m-1 w-10 focus:outline-none mx-3">
        <div></div>
      </button>
      <section className="flex justify-center flex-col mt-10 text-md">
        <NavLink active={applications} name="Applications" type="side" />
        <NavLink active={interviews} name="Interviews" type="side" />
        <NavLink active={network} name="Network" type="side" />
      </section>
    </nav>
  );
}

const navStyle: CSSProperties = {
  overflowY: 'hidden',
  minHeight: '100vh'
}

export default SideNav;