import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
  render() {
    return (
      <div id="logo">
          <div className="inner">
              <a href="/">
                  <img src="img/logo.png" alt="" className="logo-1" />
                  <img src="img/logo-2.png" alt="" className="logo-2" />
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
        <Link to={this.props.link}>{this.props.title}</Link>
      </li>
    )
  }
}

class Header extends React.Component {
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
                                <NavLink link="/" title="Home"/>
                                <NavLink link="/events" title="Events"/>
                                <NavLink link="/sermons" title="Sermons"/>
                                <NavLink link="/news" title="News" />
                                <NavLink link="/gallery" title="Gallery"/>
                                <NavLink link="/contact" title="Contact"/>
                                <NavLink link="/" title="한국어"/>
                            </ul>
                        </div>
                        {/* <!-- mainmenu close --> */}

                        {/* <!-- social icons --> */}
                        <div className="social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-rss"></i></a>
                            <a href="#"><i className="fa fa-google-plus"></i></a>
                            <a href="#"><i className="fa fa-envelope-o"></i></a>
                        </div>
                        {/* <!-- social icons close --> */}

                    </div>
                </div>
            </div>
        </header>

    )
  }
}

export default Header;
