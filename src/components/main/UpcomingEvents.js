import React from 'react';
import LodcAPI from '../model/Api'

const $ = window.$;

class EventItem extends React.Component {
  render() {
    return (
      <div className="item">
          <div className="overlay">
              <span className="time">{this.props.time}</span>
              <a href="/">
                  <h3>{this.props.title}</h3>
              </a>
              <span className="desc">
                {this.props.content}
              </span>
          </div>
          <img src={this.props.url} alt=""/>
      </div>
    )
  }
}

class UpcomingEvents extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
    this.update = this.update.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({events: nextProps.events}, () => {
      this.update();
    });
  }

  update() {
    this.$el = $(this.el);
    $('.fx .item').each(function() {
        $(this).find("img").css("width", "100%");
        $(this).find("img").css("height", "auto");
        $(this).find("img").on('load', function() {
            var w = $(this).css("width");
            var h = $(this).css("height");
            //nh = (h.substring(0, h.length - 2)/2)-48;
        }).each(function() {
            if (this.complete) $(this).load();
        });
    });

    $(".fx .item").on("mouseenter", function() {
        var speed = 700;
        $(this).find(".desc").stop(true).animate({
            'height': "120px",
            'margin-top': "20px",
            "opacity": "100"
        }, speed, 'easeOutCubic');
        $(this).find(".overlay").stop(true).animate({
            'height': "100%",
            'margin-top': "20px"
        }, speed, 'easeOutCubic');
        $(this).parent().parent().find(".item").not(this).stop(
            true).fadeTo(speed, .5);
    }).on("mouseleave", function() {
       var speed = 700;
        $(this).find(".desc").stop(true).animate({
            'height': "0px",
            'margin-top': "0px",
            "opacity": "0"
        }, speed, 'easeOutCubic');
        $(this).find(".overlay").stop(true).animate({
            'height': "84px",
            'margin-top': "20px"
        }, speed, 'easeOutCubic');
        $(this).parent().parent().find(".item").not(this).stop(
            true).fadeTo(speed, 1);
    })
    this.$el.owlCarousel({
        items: 3,
        navigation: false,
        pagination: false,
    });
  }

  render() {
    return (
          <section id='page-events' className="no-padding">
              <div className="fullwidth">
                  <div className="one-fourth text-center">
                      <div className="animated title-area wow slideInLeft">
                          <span>Upcoming</span>
                          <h1>Events</h1>
                      </div>
                  </div>

                  <div className="three-fourth">
                    {this.state.events.length >= 3 ?
                      <div className="fx custom-carousel-1" ref={el => this.el = el}>
                        {this.state.events.map(function(event, index){
                          return (
                            <EventItem key={index} time={event.content.time.en} title={event.content.title.en} url={"img/events/pic%20(2).jpg"} />
                          )
                        })}
                      </div> : ""}
                  </div>
              </div>
              <div className="clearfix"></div>

          </section>
    )
  }
}

export default UpcomingEvents;
