import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './components/main/Index';
import SermonMain from './components/sermons/SermonMain';

import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Preloader from './components/Preloader';
import NewsMain from './components/news/NewsMain';
import EventMain from './components/events/EventMain';
import GalleryMain from './components/gallery/GalleryMain';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Preloader />
          <Wrapper>
            <Header />
            <Route exact path="/" component={Index} />
            <Route exact path="/sermons" component={SermonMain} />
            <Route exact path="/news" component={NewsMain} />
            <Route exact path="/events" component={EventMain} />
            <Route exact path="/gallery" component={GalleryMain} />
            <Footer />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
