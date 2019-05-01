import React from 'react';
import { geolocated } from 'react-geolocated';

class LocationCords extends React.Component {
  constructor() {
    super();
    this.state = {
      long: '',
      lat: ''
    }
  }

  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div><center><i className="nc-icon nc-pin-3"><p class="text-danger">Please Turn on Location</p></i></center></div>
        : this.props.coords
          ? <div>
            {sessionStorage.setItem("long", this.props.coords.longitude)}
            {sessionStorage.setItem("lat", this.props.coords.latitude)}
            {console.log(this.props.coords.longitude+" "+ this.props.coords.latitude)}
          </div>
          : <div>Getting the location data&hellip; </div>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(LocationCords);