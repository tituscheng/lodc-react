import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Index from './components/main/Index'
import SermonMain from './components/sermons/SermonMain'

import Footer from './components/Footer'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Preloader from './components/Preloader'
import NewsMain from './components/news/NewsMain'
import EventMain from './components/events/EventMain'
import GalleryMain from './components/gallery/GalleryMain'
import ContactMain from './components/contact/ContactMain'
import EducationMain from './components/education/EducationMain'
import { MissionMain, IntroMain } from './components/about/AboutMain'

import { BrowserRouter as Router, Route } from 'react-router-dom'

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
            <Route exact path="/contact" component={ContactMain} />
            <Route exact path="/educations" component={EducationMain} />
            <Route exact path="/intro" component={IntroMain} />
            <Route exact path="/mission" component={MissionMain} />
            <Footer />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
