import React from 'react';
import SermonItem from '../SermonItem';

const $ = window.$;

class SermonList extends React.Component {

  //Fetch all the sermons from the api
  constructor(props) {
    super(props);
    this.state = {
      sermons: []
    }
    this.fetchSermons = this.fetchSermons.bind(this);
    this.updateSermons = this.updateSermons.bind(this);
  }

  componentDidMount() {
    this.fetchSermons();
  }

  //After the sermons are fetch, it automatically calls updateSermon to handle the changes to the view
  fetchSermons() {
    $.get("http://default-environment.tdtddkdkmp.us-west-2.elasticbeanstalk.com/api/sermon/get", function(response, status){
      this.updateSermons(response.data.sermons);
    }.bind(this));
  }

  //Update the sermons to the view
  updateSermons(list) {
    if(list && list.length > 0) {
      //By default, sort the sermons by most recent first.
      list.sort(function(a,b) {
        return new Date(b.date) - new Date(a.date);
      });
      this.setState({sermons: list});
    }
  }

  render() {
    return (
        <div id="content">
            <div className="container">
              {this.state.sermons.map(function(sermon) {
                return (
                  <div className="row">
                      <div className="col-md-10 col-md-offset-1">
                          <SermonItem url={sermon.media.youtube} title={sermon.title.en} date={sermon.date} scripture={sermon.scripture}/>
                      </div>
                  </div>
                )
              })}
            </div>
        </div>
    )
  }
}

export default SermonList;
