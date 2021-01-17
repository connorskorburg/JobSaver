import React from 'react';
import Navbar from '../reusables/Navbar';
import BottomNav from './BottomNav';
import FilterDropDown from '../utilities/FilterDropDown';
import SearchBar from '../utilities/SearchBar';
import DashTable from './DashTable';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const isShowing = useSelector((state: any) => state.sideNavShowing);

  return (
    <section className={`${isShowing ? "w-5/6" : "w-big"} dash transition-all delay-100 overflow-y-hidden"`}>
      <Navbar />
      <article className="flex">
        <SearchBar />
        <FilterDropDown />
      </article>
      <DashTable type="Applications" />
      {/* <DashTable type="Interviews" /> */}
      {/* <DashTable type="Network" /> */}
      <BottomNav />
    </section>
  );
}

export default Dashboard;