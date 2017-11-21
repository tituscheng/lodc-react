import React from 'react';
import LodcAPI from '../model/Api'

const $ = window.$;
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      buttonLabel: {
        en: "read more",
        kr: "읽기"
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({items: nextProps.about});
  }

  render() {
    return (
        <section id="section-text">
          <div className="container">
              <div className="row">
                  <div className="animated col-md-8 col-md-offset-2 text-center wow fadeInUp">
                      <h2>{this.props.lang == "en" ? "About The Church" : "교회 소개"}</h2>
                      <div className="divider-double"></div>
                  </div>
                  {this.state.items.length == 2 ?
                    <div>
                      <div className="animated col-md-4  col-md-offset-2 wow fadeInRight" data-wow-delay=".5s">
                          <img src={this.state.items[0].content.url} className="img-responsive" alt="" />
                          <h3>{this.state.items[0].content.title[this.props.lang]}</h3>
                          <a href="/intro" className="st-btn">{this.state.buttonLabel[this.props.lang]}</a>
                      </div>
                      <div className="animated col-md-4 wow fadeInRight" data-wow-delay=".75s">
                          <img src={this.state.items[1].content.url} className="img-responsive about-image" alt="" />
                          <h3>{this.state.items[1].content.title[this.props.lang]}</h3>
                          <a href="/mission" className="st-btn">{this.state.buttonLabel[this.props.lang]}</a>
                      </div>
                    </div>: ""}
              </div>
          </div>
      </section>
    )
  }
}

export default About;
