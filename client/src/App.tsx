import React from 'react';
import DashContainer from './components/layout/Dashboard';
import SideNav from './components/layout/SideNav';
import './style.css';

const App = () => {
  return (
    <main className="flex min-h-screen">
      <SideNav />
      <DashContainer />
    </main>
  );
}

export default App;
