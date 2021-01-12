import React from 'react';
import NavLink from '../reusables/NavLink';


const BottomNav = () => {
  return (
    <nav className="bottom-nav absolute bottom-0 w-full flex text-md">
      <NavLink active={true} name="Applications"type="bottom"  />
      <NavLink active={false} name="Interviews" type="bottom" />
      <NavLink active={false} name="Network" type="bottom" />
    </nav>
  );
}

export default BottomNav;