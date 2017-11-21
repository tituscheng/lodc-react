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
        <div className="container top-container">
          <div className="row">
            <div className="col-md-6">
              <LodcMap containerElement={<div style={{height: '400px'}} />}
                       mapElement={<div style={{height: '100%'}} />}
                       googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                       loadingElement={<div style={{ height: `100%` }} />} />
            </div>

            <div className="col-md-6 text-center">
                <div className="contact-info">

                    {/* <div className="social-icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-rss"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="#"><i className="fa fa-envelope-o"></i></a>
                    </div> */}

                    {/* <div className="divider-line"></div> */}

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
