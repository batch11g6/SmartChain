import React from 'react';
import {geolocated} from 'react-geolocated';
 
class LocationCords extends React.Component {
  constructor(){
    super();
    this.state={
      long:'',
      lat:''
    }
  }

  /**
   * 
   * Access the location using sessionStorage.getItem("long") 
   * and sessionStorage.getItem("lat")
   * 
   * This session has limited life i,e untill the browser window is closed 
   */
  
  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ?<div>
             {sessionStorage.setItem("long",this.props.coords.longitude)}
              { sessionStorage.setItem("lat",this.props.coords.latitude)}
          </div>
          : <div>Getting the location data&hellip; </div>;
  }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(LocationCords);