import React, { Component } from 'react'
import RevolutionSlider from './RevolutionSlider'
import UpcomingEvents from './UpcomingEvents'
import About from './About'
import LatestSermons from './LatestSermons'
import Testimonial from './Testimonial'
import Container from './Container'
import LodcMap from '../LodcMap'
import CountDownTimer from './CountDownTimer'
import LodcAPI from '../model/Api'
import { connect } from 'react-redux'

const $ = window.$;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webcontents: [],
      testimonies: [],
      events: [],
      slider: {},
      about: []
    }
  }

  componentDidMount() {
    $.get(LodcAPI.url() + "webcontent/get", function(response, status){
      if(response && response.length > 0) {
        var testimonies = [];
        var events = [];
        var slider = {};
        var about = [];

        for(var i = 0; i < response.length; i++) {
          if(response[i].page == "home" && response[i].element == "testimony") {
            testimonies[response[i].seq - 1] = response[i];
          }
          else if(response[i].page == "home" && response[i].element == "upcoming_events") {
            events[response[i].seq - 1] = response[i];
          }
          else if(response[i].page == "home" && response[i].element == "revolution") {
            var sliderKey = "slider" + (response[i].seq);
            slider[sliderKey] = response[i];
          }
          else if(response[i].page == "home" && response[i].element == "about") {
            about[response[i].seq - 1] = response[i];
          }
        }
        this.setState({webcontents: response, testimonies: testimonies, events: events, slider: slider, about: about}, () => {
          console.log(this.state.slider);
        });
      }
    }.bind(this));
  }
  render() {
    return (
      <div>
        <RevolutionSlider slider={this.state.slider} />
        <Container>
          <UpcomingEvents events={this.state.events} lang={this.props.lang} />
          <CountDownTimer />
          <About about={this.state.about} lang={this.props.lang} />
          <LatestSermons lang={this.props.lang} />
          <Testimonial contents={this.state.testimonies} />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("Current language selection is " + state.lodcApp.lang);
  return {
    lang: state.lodcApp.lang
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
