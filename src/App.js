import React from 'react';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import StickyBanner from './components/StickyBanner';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-50 transition-all duration-500">

      <Sidebar />
      <StickyBanner />
      <LandingPage />
    </div>
  );
}

export default App;
