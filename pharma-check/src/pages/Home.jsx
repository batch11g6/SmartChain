import React, { Component } from 'react'
import Scanner from '../components/Scanner'
import HeaderTemplate from '../components/HeaderTemplate'
import LocationCords from '../components/LocationCords'
import Login from '../components/Login'
import SpaceBlock from '../components/SpaceBlock';


export default class Home extends Component {
  render() {
    if(sessionStorage.getItem('login')==='success'){
      return (
        <div>
          <LocationCords />
          <HeaderTemplate />
          <div class="card"></div>
          <SpaceBlock />
          <Scanner />
        </div>
      )
    }
    else{
      return(
        <div>
          <Login />
        </div>
      );
    }
  }
}
