import React, { Component } from 'react'
import HeaderTemplate from '../components/HeaderTemplate'
import {Card, Button } from 'react-mdl'
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

        <div class="columns">
            <div class="column">
              {/** Empty column for space */}
            </div>
            <div class="column">

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
                {/*Scanner block*/}  
                <br/>
                <h1>Project Mentor: Sangeetha V</h1>

                <h1>Tream Members</h1>
                <table>
                  <thead>
                    <th>Name</th>
                    <th>USN</th>
                  </thead>
                  <tr>
                    <td>Yashwanth D M</td>
                    <td>1KS15CS123</td>
                  </tr>
                  <tr>
                    <td>Nikil M</td>
                    <td>1KS15CS066</td>
                  </tr>
                  <tr>
                    <td>Mayura K R</td>
                    <td>1KS15CS056</td>
                  </tr>
                  <tr>
                    <td>Phaneendra A R</td>
                    <td>1KS15CS002</td>
                  </tr>
                </table>
              </div>
            <a class="button is-link is-rounded" onClick={this.handleGithubClick}>GitHub</a>
            </div>  
          </div>

            </div>
            <div class="column">
                {/** Empty column for space */}
            </div>
        </div>
        </div>
    )
  }
}
