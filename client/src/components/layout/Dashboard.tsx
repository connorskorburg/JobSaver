import React from 'react';
import Navbar from '../reusables/Navbar';
import BottomNav from './BottomNav';
import FilterDropDown from '../utilities/FilterDropDown';
import SearchBar from '../utilities/SearchBar';
import DashTable from './DashTable';

const Dashboard = () => {
  return (
    <section className="w-5/6 dash transition-all overflow-y-hidden">
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