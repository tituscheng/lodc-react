import React from 'react';
import { YoutubeImage } from './Util';
import moment from 'moment-timezone';
import format from 'string-format';

class SermonItem extends React.Component {
  constructor(props) {
    super(props);
    this.makePassage = this.makePassage.bind(this);
    this.state = {
      date: moment.tz(props.date, "America/Los_Angeles").format("MMMM D YYYY"),
      passage: this.makePassage(this.props.scripture)
    }
  }

  makePassage(ref) {
    if(ref != null) {
      if(ref.startverse == ref.endverse) {
        return format("{book.en} {chapter}:{startverse}", ref);
      } else {
        return format("{book.en} {chapter}:{startverse}-{endverse}", ref)
      }
    }
  }

  render() {
    return (
      <div className="custom-col-3">
          <div className="left-col">
              <YoutubeImage url={this.props.url} />
          </div>
          <div className="mid-col">
              <a href="#">
                  <h3>{this.props.title}</h3>
              </a>
              <div>
                {this.state.passage}
              </div>
              <div className="details"><span>{this.state.date}</span></div>
          </div>
          <div className="right-col">
              <a href="#"><i className="fa fa-video-camera"></i></a>
              <a href="#"><i className="fa fa-volume-up"></i></a>
              <a href="#"><i className="fa fa-file-pdf-o"></i></a>
          </div>
      </div>
    )
  }
}

export default SermonItem;
