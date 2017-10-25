import React from 'react';

const $ = window.$

class Preloader extends React.Component {

  componentDidMount() {
    this.$el = $(this.el);
    this.$el.delay(500).fadeOut(500);
  }

  render() {
    return (
      <div id="preloader" ref={el => this.el = el}>
      </div>
    )
  }
}

export default Preloader;
