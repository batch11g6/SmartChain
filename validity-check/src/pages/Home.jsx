import React, { Component } from 'react'
import Scanner from '../components/Scanner'
import HeaderTemplate from '../components/HeaderTemplate'
import LocationCords from '../components/LocationCords'
import SpaceBlock from '../components/SpaceBlock'
import MapView from '../components/MapView'


export default class Home extends Component {
  render() {
    return (
      <div>
        <HeaderTemplate/>
        <SpaceBlock/>
        <Scanner/>
       
      </div>
    )
  }
}
