import React, { Component } from 'react'
import LocationCords from '../components/LocationCords'
import HeaderTemplate from '../components/HeaderTemplate'

export default class Reports extends Component {
  render() {
    return (
      <div>
          <HeaderTemplate/>
            {sessionStorage.getItem('long')}<br/>
            {sessionStorage.getItem('lat')}
      </div>
    )
  }
}
