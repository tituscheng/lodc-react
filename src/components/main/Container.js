import React from 'react';

const $ = window.$;

class Container extends React.Component {
  componentDidMount() {
    // this.$el = $(this.el);
    // this.$el.fitVids();
    // this.$el.each(function() {
    //     $("img").css("width", "100%");
    //     $("img").css("height", "auto");
    //     $("img").on('load', function() {
    //         var w = $("img").css("width");
    //         var h = $("img").css("height");
    //         //nh = (h.substring(0, h.length - 2)/2)-48;
    //     }).each(function() {
    //         if (this.complete) $(this.el).load();
    //     });
    // });
  }
  render() {
    return (
      <div id="content" className="no-padding" ref={el => this.el = el}>
        {this.props.children}
      </div>
    )
  }
}

export default Container;
