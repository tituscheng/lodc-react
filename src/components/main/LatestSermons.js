import React from 'react'
import SermonItem from '../SermonItem'
import Sermons from '../model/Sermons'

const $ = window.$;

class LatestSermons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sermons: []
    }
    this.updateSermons = this.updateSermons.bind(this);
  }

  componentDidMount() {
    Sermons.getRecent(4, function(sermons){
      this.updateSermons(sermons);
    }.bind(this));
  }

  updateSermons(list) {
    if(list && list.length > 0) {
      this.setState({sermons: list});
    }
  }

  render() {
    return (
        <section id="latest-sermons">
          <div className="container">
              <div className="row">
                  <div className="animated col-md-8 col-md-offset-2 text-center wow fadeInUp">
                      <h2>Latest Sermons</h2>
                      <div className="divider-double"></div>
                  </div>
                  <div className="col-md-10 col-md-offset-1">
                      {this.state.sermons.map(function(sermon, index) {
                        return (<SermonItem title={sermon.title.en} date={sermon.date} url={sermon.media.youtube} key={index}/>)
                      })}
                  </div>
              </div>
          </div>
      </section>

    )
  }
}

export default LatestSermons;
