import React from 'react';
import {HashRouter } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import Promo from '../promo/promo';
import Card from '../card/card';
import AboutUs from '../about-us/about-us';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';


const App = () => {
  return (
  <HashRouter>
    <div className="app">
      <Header/>
      <main className="main">
        <Promo/>
        <Card/>
        <AboutUs/>
        <Reviews/>
        <Contacts/>
      </main>
      <Footer/>
    </div>
  </HashRouter>
  );
};

App.displayName = 'App';

export default App;
