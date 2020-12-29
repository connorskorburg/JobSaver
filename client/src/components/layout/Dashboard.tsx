import React from 'react';
import Navbar from '../reusables/Navbar';
import FilterDropDown from '../utilities/FilterDropDown';
import SearchBar from '../utilities/SearchBar';

const Dashboard = () => {
  return (
    <section className="w-5/6 transition-all">
      <Navbar />
      <article className="flex">
        <SearchBar />
        <FilterDropDown />
      </article>
    </section>
  );
}

export default Dashboard;