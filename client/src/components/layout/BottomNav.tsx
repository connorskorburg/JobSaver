import React from 'react';
import { useSelector } from 'react-redux';
import NavLink from '../reusables/NavLink';


const BottomNav = () => {
  const content = useSelector((state: any) => state.activeContent);

  return (
    <nav className="bottom-nav absolute bottom-0 w-full flex text-md">
      <NavLink active={content.applications} name="Applications"type="bottom"  />
      <NavLink active={content.interviews} name="Interviews" type="bottom" />
      <NavLink active={content.network} name="Network" type="bottom" />
    </nav>
  );
}

export default BottomNav;