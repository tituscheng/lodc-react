import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style={
  width: '100%',
  height: '100%'
}

export class LodcMap extends React.Component {
  render() {
    return (
      <section id="google-map">
        <div>
              <Map google={this.props.google} zoom={14} style={style} className={'map'}>
                <Marker onClick={this.onMarkerClick} name={'Loving Open Door Church'} />
              </Map>
          </div>
      </section>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(LodcMap)
