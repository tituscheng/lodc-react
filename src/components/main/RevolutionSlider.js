import React from 'react'
import LodcAPI from '../model/Api'

//This global variable is needed to access the $ from the external script in public javascript
const $ = window.$;

class Slide extends React.Component {
  componentDidMount() {
    this.$node = $(this.refs.sortable);
  }
}

class Slider1 extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.url);
  }
  render() {
    return (
      <li data-transition="fade" data-slotamount="10" data-masterspeed="1500">
          <img src={this.props.url} alt="" />
          <div className="tp-caption border-v lft"
              data-x="540"
              data-y="center"
              data-speed="800"
              data-start="400"
              data-easing="easeInOutCubic"
              data-endspeed="300">
          </div>

          <div className="tp-caption custom-font-1 lft"
              data-x="600"
              data-y="140"
              data-speed="800"
              data-start="1000"
              data-easing="easeInOutCubic"
              data-endspeed="300">
              {this.props.title}
          </div>

          <div className="tp-caption lft custom-font-2"
              data-x="600"
              data-y="190"
              data-speed="800"
              data-start="800"
              data-easing="easeInOutCubic">
              {this.props.subtitle}
          </div>

          <div className="tp-caption sfb text-left"
              data-x="600"
              data-y="240"
              data-speed="800"
              data-start="1400"
              data-easing="easeInOutCubic">
              {this.props.content}<br />
          </div>

          <div className="tp-caption sfb text-left"
              data-x="600"
              data-y="310"
              data-speed="800"
              data-start="1600"
              data-easing="easeInOutCubic">
              <a className="btn btn-slider" href="#">Read More</a>
          </div>
      </li>
    )
  }
}

class Slider2 extends React.Component {
  render() {
    return (
      <li data-transition="fade" data-slotamount="10" data-masterspeed="1500">

          <img src={this.props.url} alt="" />
          <div className="tp-caption custom-font-1 lft"
              data-x="left"
              data-y="140"
              data-speed="800"
              data-start="400"
              data-easing="easeInOutCubic"
              data-endspeed="300">
              {this.props.title}
          </div>

          <div className="tp-caption sfr custom-font-2"
              data-x="left"
              data-y="190"
              data-speed="800"
              data-start="800"
              data-easing="easeInOutCubic">
              {this.props.subtitle}
          </div>

          <div className="tp-caption sfb text-left"
              data-x="left"
              data-y="240"
              data-speed="800"
              data-start="1200"
              data-easing="easeInOutCubic">
              {this.props.content}<br />
          </div>

          <div className="tp-caption sfb text-left"
              data-x="left"
              data-y="310"
              data-speed="800"
              data-start="1600"
              data-easing="easeInOutCubic">
              <a className="btn btn-slider" href="#">Read More</a>
          </div>
      </li>
    )
  }
}

class Slider3 extends React.Component {
  render() {
    return (
      <li data-transition="fade" data-slotamount="10" data-masterspeed="1500">

          <img src={this.props.url} alt="" />
          <div className="tp-caption border-v lft"
              data-x="540"
              data-y="center"
              data-speed="800"
              data-start="400"
              data-easing="easeInOutCubic"
              data-endspeed="300">
          </div>

          <div className="tp-caption custom-font-1 lft"
              data-x="600"
              data-y="140"
              data-speed="800"
              data-start="1000"
              data-easing="easeInOutCubic"
              data-endspeed="300">
              {this.props.title}
          </div>

          <div className="tp-caption lft custom-font-2"
              data-x="600"
              data-y="190"
              data-speed="800"
              data-start="800"
              data-easing="easeInOutCubic">
              {this.props.subtitle}
          </div>

          <div className="tp-caption sfb text-left"
              data-x="600"
              data-y="240"
              data-speed="800"
              data-start="1400"
              data-easing="easeInOutCubic">
              {this.props.content}<br />
          </div>

          <div className="tp-caption sfb text-left"
              data-x="600"
              data-y="310"
              data-speed="800"
              data-start="1600"
              data-easing="easeInOutCubic">
              <a className="btn btn-slider" href="#">Read More</a>
          </div>
      </li>
    )
  }
}

class RevolutionSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: {}
    }
    this.updateSlider = this.updateSlider.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("Revolution sliders");
    console.log(nextProps.slider);
    this.updateSlider(nextProps.slider);
  }

  updateSlider(theSlider) {
    this.setState({slider: theSlider}, () => {
      this.$el = $(this.el);
      this.$el.revolution({
          delay: 15000,
          startwidth: 1170,
          startheight: 500,
          hideThumbs: 10,
          fullWidth: "off",
          fullScreen: "on",
          fullScreenOffsetContainer: "",
          touchenabled: "on",
          navigationType: "none",
      });
    });
  }


  render() {
    return (
        <div id="slider">
            <div className="fullwidthbanner-container">
              {Object.keys(this.state.slider).length > 0 ?
                <div id="revolution-slider" ref={el => this.el = el}>
                    <ul>
                        <Slider1 url={this.state.slider.slider1.content.url}/>
                        <Slider2 url={this.state.slider.slider2.content.url}/>
                        <Slider3 url={this.state.slider.slider3.content.url}/>
                    </ul>
                </div>
                : ""}
            </div>
        </div>
    );
  }
}

export default RevolutionSlider;
