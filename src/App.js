import React from 'react';
import { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import HeaderCover from './Components/Header-Cover/HeaderCover';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import { Context } from './Components/Context/Context';

import './App.scss';

function App() {

  const appRef = useRef();

  const handleChangeStyleMode = (checked) => {
    if (!checked) {
      appRef.current.classList.add('dark');
    } else {
      appRef.current.classList.remove('dark');
    }
  }

  const handleAnimationScroll = (block, func) => {
    const handleScroll = () => {
      if (block.current) {
        const top = block.current.getBoundingClientRect().top;

        if (top <= 300) {
          func(true);
        } else {
          func(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }

  const contextValue = {
    handleAnimationScroll: handleAnimationScroll
  };

  return (
    <div
      ref={appRef}
      className="App"
    >
      <Context.Provider value={contextValue}>
        <BrowserRouter>
          <header>
            <Header handleChangeStyleMode={handleChangeStyleMode} />
            <HeaderCover />
          </header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/ContactUs' element={<ContactUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div >
  );
}

export default App;
