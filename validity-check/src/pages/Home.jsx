import React, { Component } from 'react'
import Scanner from '../components/Scanner'
import HeaderTemplate from '../components/HeaderTemplate'
import LocationCords from '../components/LocationCords'
import SpaceBlock from '../components/SpaceBlock'


export default class Home extends Component {
  render() {
    return (
      <div>
        <LocationCords/>
        <HeaderTemplate/>
        <SpaceBlock/>
        <Scanner/>
      </div>
    )
  }
}
