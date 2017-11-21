import React from 'react';

class Footer extends React.Component {
  render() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        &copy; Copyright 2017 - Loving Open Door Church
                    </div>
                    <div className="col-md-6">
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/events">Events</a></li>
                                <li><a href="/news">News</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer;
