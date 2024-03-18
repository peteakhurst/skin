import { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CallOutSection from './components/CallOutSection';
import './App.css';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <HeroBanner />
        <CallOutSection />
      </div>
    </>
  );
}

export default App;
