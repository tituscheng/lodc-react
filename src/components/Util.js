import React from 'react';
import format from 'string-format';

export class YoutubeImage extends React.Component {
  constructor(props) {
    super(props)
    this.getYoutubeThumbnail = this.getYoutubeThumbnail.bind(this);
  }

  //transformLink takes a youtube link and convert into a thumbnail image url
  getYoutubeThumbnail(link) {
    if(typeof link === 'string' || link instanceof String) {
      //Use regex to extract youtube video link from the link
      var regExp = /^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/i;
      var match = regExp.exec(link);
      if (match && match[3].length > 0) {
        return format("https://img.youtube.com/vi/{0}/hqdefault.jpg", match[3]);
      } else {
        return "";
      }
    } else {
      console.log("SermonItem: Link not a valid parameter");
      return "";
    }
  }

  render() {
    return (
      <img src={this.getYoutubeThumbnail(this.props.url)} alt="" className="img-responsive" />
    )
  }
}
