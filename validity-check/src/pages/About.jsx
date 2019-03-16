import React, { Component } from 'react'
import HeaderTemplate from '../components/HeaderTemplate'
import {Card, Button} from 'react-mdl'
import SpaceBlock from '../components/SpaceBlock'



export default class About extends Component {
  constructor(){
    super()
    this.handleGithubClick=this.handleGithubClick.bind(this);
  }

  handleGithubClick(){
    window.location.assign("https://github.com/batch11g6/SmartChain")
  }
  render() {
    return (
      <div>
        <HeaderTemplate/>
        <SpaceBlock/>
        <Card style={{width:"50%", margin:"auto" ,color:"gray"}} shadow={2}>
          {/** Padding  TBRL */}
        <div style={{padding:"10px 20px 10px 30px"}}>
          <h1 >
            Team 11, Group 6
          </h1>
          <h3>Team Members</h3>
          <ul>
            <li>Yashwanth D M </li>
            <li>Phaneendra A R</li>
            <li>Mayura K R</li>
            <li>Nikil M</li>
          </ul>
          <Button  raised ripple colored onClick={this.handleGithubClick}>
              GitHub
          </Button>
        </div>
        </Card>
      </div>
    )
  }
}
