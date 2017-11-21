import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const $ = window.$;

class Logo extends React.Component {
  render() {
    return (
      <div id="logo">
          <div className="inner">
              <a href="/">
                  <img src="https://s3-us-west-2.amazonaws.com/lodc-webcontent/lodc-logo-transparent.png" alt="" className="logo-1" />
                  <span className="logo-text">Loving Open Door Church</span>
              </a>
          </div>
      </div>
    )
  }
}

class NavLink extends React.Component {
  render() {
    return (
      <li>
          <Link to={this.props.link} onClick={this.props.onClick}>
            {this.props.title}
          </Link>
      </li>
    )
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.nextLanguage = this.nextLanguage.bind(this);
    this.state = {
      lang: this.props.lang,
      nextLang: this.nextLanguage(this.props.lang),
      home: {
        en: "home",
        kr: "홈페이지"
      },
      event: {
        en: "Events",
        kr: "행사 일정"
      },
      news: {
        en: "News",
        kr: "교회소식"
      },
      sermon: {
        en: "Sermons",
        kr: "말씀"
      },
      prayer: {
        en: "Prayers",
        kr: "기도제목"
      },
      gallery: {
        en: "Gallery",
        kr: "사진"
      },
      contact: {
        en: "contact",
        kr: "문의하기"
      },
      education: {
        en: "educations",
        kr: "교육"
      }
    }
  }


  nextLanguage(lang) {
    if(lang == "en") {
      return "한국어"
    } else if(lang == "kr") {
      return "English"
    }
  }

  toggle() {
    if(this.props.lang == "en") {
      this.props.toKr();
      console.log(this.props.lang);
    } else if(this.props.lang == "kr") {
      this.props.toEn();
      console.log(this.props.lang);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({nextLang: this.nextLanguage(nextProps.lang)});
    console.log("The current selected language is " + nextProps.lang);
  }

  render() {
    return (
      <header>
            <div className="container">
                <span id="menu-btn"></span>
                <div className="row">
                    <div className="col-md-3">
                        <Logo />
                    </div>

                    <div className="col-md-9">

                        {/* <!-- mainmenu begin --> */}
                        <div id="mainmenu-container">
                            <ul id="mainmenu">
                                {/* <NavLink link="/" title={this.state.home[this.props.lang]}/> */}
                                <NavLink link="/sermons" title={this.state.sermon[this.props.lang]}/>
                                <NavLink link="/events" title={this.state.event[this.props.lang]}/>
                                <NavLink link="/educations" title={this.state.education[this.props.lang]} />
                                <NavLink link="/news" title={this.state.news[this.props.lang]} />
                                <NavLink link="/gallery" title={this.state.gallery[this.props.lang]}/>
                                <NavLink link="/contact" title={this.state.contact[this.props.lang]}/>
                                <NavLink link="/prayer" title={this.state.prayer[this.props.lang]} />
                                <NavLink link="#" onClick={this.toggle} title={this.state.nextLang}/>
                            </ul>
                        </div>
                        {/* <!-- mainmenu close --> */}

                    </div>
                </div>
            </div>
        </header>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lodcApp.lang
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toEn:() => {
      dispatch({type: "SET_LANG_DATA", lang: "en"});
    },
    toKr:() => {
      dispatch({type: "SET_LANG_DATA", lang: "kr"});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
