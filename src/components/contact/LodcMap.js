import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps'

class LodcMap extends React.Component {
  render() {
    return (
      <GoogleMap defaultZoom={17} defaultCenter={{lat: 47.686617, lng: -122.202383}}>

      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(LodcMap));
