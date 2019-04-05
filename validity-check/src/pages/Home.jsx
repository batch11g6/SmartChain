import React, { Component } from 'react'
import Scanner from '../components/Scanner'
import HeaderTemplate from '../components/HeaderTemplate'
import LocationCords from '../components/LocationCords'
import SpaceBlock from '../components/SpaceBlock'


export default class Home extends Component {
  render() {
    return (
      <div>
        <HeaderTemplate />
        <SpaceBlock />
        <SpaceBlock />
        <LocationCords />
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Smart Chain
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <Scanner />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
