import React, { Component } from 'react'
import SpaceBlock from './SpaceBlock'
import './components.css'
var facts =require('../assets/content/facts.json')


export default class LoadingAnimation extends Component {
    constructor(){
        super()
        this.state={
           messages:{
            1:"Not panicking...totally not panicking...er...everything's fine...",
            2:"Going the distance...",
            3:"The Elders of the Internet are contemplating your request...",
            4:"Baking cake...er...I mean loading, yeah loading...",
            5:"I'll be with you in a bit...(snicker)",
            6:"Let this abomination unto the Lord begin ",
            7:"Making stuff up. Please wait...",
            8:"Checking prime directives: Serve the public trust...Protect the innocent...Uphold the law...Classified.... ",
            9:"Commencing infinite loop (this may take some time)....",
            10:"Water detected on drive C:, please wait. Spin dry commencing ",
            11:"Yes there really are magic elves with an abacus working frantically in here",
            12:"Sacrificing a resistor to the machine gods....",
            13:"Performing the rite of percussive maintenance....",
           }
        }
    }
  render() {
    return (
      <div>
          <SpaceBlock />
        <center><h1>{this.state.messages[Math.floor(Math.random() * (13) + 1)]}</h1></center>
       <div class="columns">
        <div class="column">
        <img src="https://cdn.dribbble.com/users/614270/screenshots/6388141/appbuild_drib02.gif"
            />
        </div>
        <div class="column">
        <br></br><br></br>
        <div class="color_gray padding">
                <p class="color_gray "><tab1>{facts[Math.floor(Math.random() * (5) + 1)]}</tab1></p>
            </div>
        </div>
       </div>
      </div>
    )
  }
}
