import React from 'react'
import SubHeader from '../SubHeader'
import ClearFix from '../ClearFix'
import { connect } from 'react-redux'
import moment from 'moment-timezone'

const $ = window.$;

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: moment.tz(props.date, "America/Los_Angeles").format("DD"),
      month: moment.tz(props.date, "America/Los_Angeles").format("MMM")
    }
  }
  render() {
    return (
      <li>
        <div className="info">
            <div className="date-box">
                <span className="day">{this.state.day}</span>
                <span className="month">{this.state.month}</span>
            </div>
        </div>
        <div className="preview">
            {/* <img src="img/blog/pic-blog-1.jpg" alt="" /> */}
            <a href="news-single.html">
                <h3 className="blog-title">{this.props.title}</h3>
            </a>{this.props.content}
        </div>
        {/* <div className="meta-info">By: <a href="#">Admin</a><span>|</span><a href="#">Faith</a>, <a href="#">People</a><span>|</span><a href="#">2 Comments</a></div> */}
      </li>
    )
  }
}

class News {
  constructor(news) {
    this.id = news.id;
    this.title = news.title;
    this.content = (news.content == null ? {en: "", kr: ""} : news.content);
    this.date = news.date;
    this.created = news.created;
    this.updated = news.updated;
  }
}

class NewsManager {
  constructor() {
    this.newsHolder = {};
    this.addNewsList = this.addNewsList.bind(this);
    this.addNews = this.addNews.bind(this);
  }

  addNewsList(theList) {
    for(var i = 0; i < theList.length; i++) {
      this.addNews(theList[i]);
    }
  }

  addNews(theNews) {
    var key = moment.tz(theNews.date, "America/Los_Angeles").format("YYYYMM");
    if(key in this.newsHolder) {
      this.newsHolder[key].push(new News(theNews));
    } else {
      this.newsHolder[key] = [theNews];
    }
  }

  getNews() {
    var result = [];
    var newsItem = {};
    var allKeys = Object.keys(this.newsHolder);
    allKeys.sort(function(a, b) {
      return b - a;
    });
    for(var i = 0; i < allKeys.length; i++) {
      var key = allKeys[i];
      var month = moment.tz(key.slice(4, key.length), "America/Los_Angeles").format("MMMM");
      var year = key.slice(0, 4);
      result.push({
        groupName: month + " " + year,
        news: this.newsHolder[key]
      })
    }
    return result;
  }
}

class NewsBarItem extends React.Component {
  render() {
    return (
      <li>
          <div className="date-box">
              <span className="day">{this.props.day}</span>
              <span className="month">{this.props.month}</span>
          </div>
          <div className="txt">
              <h5><a href="css/#">{this.props.title}</a></h5>
              <div>
                  <div>{this.props.content}</div>
              </div>
          </div>
      </li>
    )
  }
}

class NewsSideBar extends React.Component {
  render() {
    return (
      <div id="sidebar" className="col-md-4">
        <div className="widget latest_news">
            <h3>{this.props.lang == "en" ? "Latest News" : "최신 뉴스"}</h3>
            <ul className="bloglist-small">
              <NewsBarItem day="01" month="FEB" title="Lin: 'God Is Challenging Me!'" content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque" />
            </ul>
        </div>
      </div>
    )
  }
}


class NewsMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news:[]
    };

    this.fetchNews = this.fetchNews.bind(this);
    this.updateNews = this.updateNews.bind(this);
    this.fetchNews();
  }

  fetchNews() {
    $.get("http://default-environment.tdtddkdkmp.us-west-2.elasticbeanstalk.com/api/api/news/get", function(response, status) {
      var newsManager = new NewsManager();
      newsManager.addNewsList(response.data);
      this.updateNews(newsManager.getNews());
    }.bind(this));
  }

  updateNews(list) {
    this.setState({news: list});
  }

  render() {
    return (
      <div>
          <SubHeader title="News" />
          <ClearFix />
          <div id="content">
            <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    {
                      this.state.news.map(function(newsGroup){
                        return (
                                <div className="col-md-10 col-md-offset-1">
                                  <center><h2> {newsGroup.groupName} </h2></center>
                                    <ul className="blog-list">
                                      {
                                        newsGroup.news.map(function(newsItem) {
                                          return (
                                            <NewsItem date={newsItem.date} title={newsItem.title[this.props.lang]}/>
                                          )
                                        }.bind(this))
                                      }
                                    </ul>
                                </div>
                        )
                      }.bind(this))
                    }
                  </div>
                  <NewsSideBar lang={this.props.lang}/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lodcApp.lang
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsMain);
