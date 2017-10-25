import React from 'react'
import SubHeader from '../SubHeader'
import ClearFix from '../ClearFix'
import LodcMap from './LodcMap'
import LodcAPI from '../model/Api'

const $ = window.$;

export default class ContactMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {}
    }
  }
  componentDidMount() {
    $.get(LodcAPI.url() + "webcontent/get", function(response, status){
      if(response && response.length > 0) {
        var detail = {};
        for(var i = 0; i < response.length; i++) {
          if(response[i].page == "contact" && response[i].element == "detail") {
            detail = response[i];
          }
        }
        console.log(detail);
        this.setState({detail: detail});
      }
    }.bind(this));
  }

  render() {
    return (
      <div>
        <SubHeader title="Contact" />
        <ClearFix />
        <LodcMap containerElement={<div style={{height: '400px'}} />}
                 mapElement={<div style={{height: '100%'}} />}
                 googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                 loadingElement={<div style={{ height: `100%` }} />} />

        <div className="container top-container">
          <div className="row">
                    <div className="col-md-6">
                        <div id="contact-form-wrapper">
                            <div className="contact_form_holder">
                                <form id="contact" className="row" name="form1" method="post" action="">



                                    <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />

                                    <div id="error_email" className="error">Please check your email</div>
                                    <input type="text" className="form-control" name="email" id="email" placeholder="Your email" />

                                    <div id="error_message" className="error">Please check your message</div>
                                    <textarea cols="10" rows="10" name="message" id="message" className="form-control" placeholder="Your message"></textarea>

                                    <div id="mail_success" className="success">Thank you. Your message has been sent.</div>
                                    <div id="mail_failed" className="error">Error, email not sent</div>

                                    <p id="btnsubmit">
                                        <input type="submit" id="send" value="Send" className="btn btn-custom" />
                                    </p>



                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
                        <div className="contact-info">

                            <div className="social-icons">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-rss"></i></a>
                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                <a href="#"><i className="fa fa-envelope-o"></i></a>
                            </div>

                            <div className="divider-line"></div>

                            <span className="title">Phone:</span>
                            {"content" in this.state.detail ? this.state.detail.content.phone : ""}

						                <div className="divider-line"></div>

                            <span className="title">Weekly Service Time:</span>
                            {"content" in this.state.detail ?
                                  this.state.detail.content.service_time.split(";").map(function(time, index) {
                                    return (
                                      <div key={index}>
                                        {time} <br />
                                      </div>
                                    )
                                  })
                                  : ""}


                            <div className="divider-line"></div>

                            <span className="title">Church Location:</span>
                            {"content" in this.state.detail ? this.state.detail.content.church_location : ""}

                            <span className="title"> Wednesday </span>
                            {"content" in this.state.detail ? this.state.detail.content.wednesday_location : ""}

                        </div>


                    </div>
                </div>

        </div>
      </div>
    )
  }
}
