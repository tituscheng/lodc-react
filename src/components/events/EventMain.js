import React from 'react';
import SubHeader from '../SubHeader';
import ClearFix from '../ClearFix';

import moment from 'moment-timezone';

const $ = window.$;

class EventItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-6 event-item">
          <div className="inner">
              <div className="right-col">
                <span className={this.props.day.length > 3 ? "date-small" : "date"}>{this.props.day}</span>
                <span className="month">{this.props.month}</span>
                <span className="time">{this.props.time}</span>
              </div>
              <div className="left-col">
                    <a href="#">
                        <h3>{this.props.title}</h3>
                    </a>
                    <span className="text"> {this.props.content}
                    </span>
              </div>
          </div>
      </div>
    )
  }
}

class Event {
  constructor(ev) {
    this.id = ev.id;
    this.title = ev.title;
    this.startdate = moment.tz(ev.startdate, "America/Los_Angeles");
    this.enddate = moment.tz(ev.enddate, "America/Los_Angeles");
    this.content = ev.content;
    this.created = ev.created;
    this.updated = ev.updated;

    this.day = this.startdate.format("D");
    if(this.enddate != null && this.startdate.format("D") != this.enddate.format("D")) {
      this.day = this.day + " - " + moment.tz(this.enddate, "America/Los_Angeles").format("D");
    }
    this.month = moment.tz(this.startdate, "America/Los_Angeles").format("MMM");
    this.time = moment.tz(this.startdate, "America/Los_Angeles").format("h:ma");
  }
}

class EventsManager {
  constructor() {
    this.eventsHolder = {};
    this.addEventList = this.addEventList.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }

  addEventList(theList) {
    for(var i = 0; i < theList.length; i++) {
      this.addEvent(theList[i]);
    }
  }

  addEvent(theEvent) {
    var key = moment.tz(theEvent.startdate, "America/Los_Angeles").format("YYYYMM");
    if(key in this.eventsHolder) {
      this.eventsHolder[key].push(new Event(theEvent));
    } else {
      this.eventsHolder[key] = [new Event(theEvent)];
    }
  }

  getEvents() {
    var result = [];
    var eventItem = {};
    var allKeys = Object.keys(this.eventsHolder);
    allKeys.sort(function(a, b) {
      return b - a;
    });
    for(var i = 0; i < allKeys.length; i++) {
      var key = allKeys[i];
      var month = moment.tz(key.slice(4, key.length), "America/Los_Angeles").format("MMMM");
      var year = key.slice(0, 4);
      result.push({
        groupName: month + " " + year,
        events: this.eventsHolder[key]
      })
    }
    return result;
  }
}


class EventMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events:[]
    };
    this.fetchEvents = this.fetchEvents.bind(this);
    this.updateEvents = this.updateEvents.bind(this);
    this.fetchEvents();
  }

  fetchEvents() {
    $.get("http://default-environment.tdtddkdkmp.us-west-2.elasticbeanstalk.com/api/api/event/get", function(response, status) {
      console.log(response.data.events);
      var eventsManager = new EventsManager();
      eventsManager.addEventList(response.data.events);
      this.updateEvents(eventsManager.getEvents());
    }.bind(this));
  }

  updateEvents(list) {
    this.setState({events: list});
  }

  render() {
    return (
      <div>
        <SubHeader title="Events" />
        <ClearFix />
        <div id="content">

            <div className="container">
                {
                  this.state.events.map(function(eventGroup) {
                    return (
                      <div className="row">
                        <h2>{eventGroup.groupName}</h2>
                        {
                          eventGroup.events.map(function(event) {
                            return (
                              <EventItem title={event.title.en} day={event.day} month={event.month} time={event.time}/>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
            </div>

        </div>

      </div>

    )
  }
}

export default EventMain;
