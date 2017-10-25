import React from 'react';

class CountDownTimer extends React.Component {
  render() {
    return (
      <section id="countdown-container" data-speed="5" data-type="background">
          <div className="container">
              <div className="row text-center">
                  <div className="animated col-md-6 wow fadeInLeft">
                      <h3>Next sermon</h3>
                      <span className="time">April 10, 2017 8:00 pm</span>
                  </div>

                  <div className="animated col-md-6 wow fadeInRight" data-wow-delay=".25s">
                      <div id="defaultCountdown"></div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default CountDownTimer;
