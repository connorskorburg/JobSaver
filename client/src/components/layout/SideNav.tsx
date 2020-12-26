import React from 'react';
import SideNavLink from '../reusables/SideNavLink';

const SideNav = () => {
  return (
    <nav className="w-1/6 min-h-screen bg-gray-800 shadow-lg py-5 transition-all">
      <button className="nav-icon m-1 w-10 focus:outline-none mx-3">
        <div></div>
      </button>
      <section className="flex justify-center flex-col mt-10 text-md">
        <SideNavLink name="Applications" />
        <SideNavLink name="Interviews" />
        <SideNavLink name="Network" />
      </section>
    </nav>
  );
}

export default SideNav;