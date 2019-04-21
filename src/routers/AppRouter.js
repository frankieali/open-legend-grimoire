import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LandingPage from '../components/LandingPage';
import ItemDetails from '../components/ItemDetails/ItemDetails';
import NotFoundPage from '../components/NotFoundPage'

export default () => (
  <BrowserRouter>
    <Header /> 
    <div className="page-content">
      <div className="wrapper">
      <ScrollMemory />
        <Switch>
          <Route path="/" component={LandingPage} exact={true} />
          <Route path="/item/:section/:id/:title" component={ItemDetails} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
    <Footer />
  </BrowserRouter>
);
