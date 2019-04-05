
import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { Card } from 'react-mdl'
import SpaceBlock from './SpaceBlock'
import LocationCords from './LocationCords'

class MapView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {},
    }
  }
  render() {

    const style = {
      width: '100%',
      height: '800px',
    }

    return (
      <div>
        <LocationCords />
        <Card shadow={0} style={{ width: '100%', height: '400px' }}>
          <Map
            google={this.props.google}
            style={style}
            initialCenter={{
              lat: sessionStorage.getItem("lat"),
              lng: sessionStorage.getItem("long")
            }}
            zoom={15}
            onClick={this.onMapClicked}
          >
            <Marker onClick={this.onMarkerClick} name={'location'} title={this.props.citycount}
              google={this.props.google}

            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>

            </InfoWindow>
          </Map>

        </Card>
        <SpaceBlock />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (""),
})(MapView)