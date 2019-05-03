import React, { Component } from 'react'
import SpaceBlock from '../components/SpaceBlock'
import HeaderTemplate from '../components/HeaderTemplate'

export default class Page404 extends Component {
  render() {
    return (
      <div>
        <HeaderTemplate />
        <div class="card"></div>
          <SpaceBlock />
          <center style={{color: "#A9A9A9"}}><h1>Not sure what to make of this one ...You can go to <a href="home">home page</a></h1></center>
        <img src="https://cdn.dribbble.com/users/696579/screenshots/5430680/1600x1200.gif" 
        height="100%"
        width=""
        />
      </div>
    )
  }
}
