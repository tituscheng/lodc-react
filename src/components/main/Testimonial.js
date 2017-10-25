import React from 'react';
import LodcAPI from '../model/Api'

const $ = window.$;

class Testimony extends React.Component {
  render() {
    return (
      <div className="item">
          <img src="img/testi/pic%20(1).jpg" alt="" className="img-circle" />
          <blockquote>{this.props.content}</blockquote>
          <span className="testi-by">{this.props.author}</span>
      </div>
    )
  }
}

class Testimonial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({contents: nextProps.contents}, () => {
      this.$el = $(this.el);
      this.$el.owlCarousel({
          singleItem: true,
          lazyLoad: true,
          navigation: false
      });
    });
  }

  render() {
    return (
        <section id="section-testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                      {this.state.contents.length > 0 ?
                        <div id="testi-carousel" className="testi-slider text-center wow fadeInUp" ref={el => this.el = el}>
                              {this.state.contents.map(function(testi, index){
                                return (
                                  <Testimony content={testi.content.title} author={testi.content.author} key={index}/>
                                )
                              })}
                        </div> : ""
                      }
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

export default Testimonial;
