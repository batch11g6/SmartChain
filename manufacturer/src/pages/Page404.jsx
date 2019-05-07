import React, { Component } from 'react'
import SpaceBlock from '../components/SpaceBlock'
import HeaderTemplate from '../components/HeaderTemplate'
import gif404 from '../assets/404.gif'

export default class Page404 extends Component {
  render() {
    return (
      <div>
        <HeaderTemplate />
        <div class="card"></div>
          <SpaceBlock />
          <center style={{color: "#A9A9A9"}}><h1>Not sure what to make of this one ...You can go to <a href="home">home page</a></h1></center>
        <img src={gif404} 
        height="100%"
        width=""
        />
      </div>
    )
  }
}
