import React from 'react';

class Footer extends React.Component {
  render() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        &copy; Copyiright 2017 - Loving Open Door Church
                    </div>
                    <div className="col-md-6">
                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Contact Us</a></li>
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
