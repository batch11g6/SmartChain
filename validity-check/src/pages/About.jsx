import React, { Component } from 'react'
import HeaderTemplate from '../components/HeaderTemplate'
import SpaceBlock from '../components/SpaceBlock'
import '../components/components.css'


export default class About extends Component {
  constructor() {
    super()
    this.handleGithubClick = this.handleGithubClick.bind(this);
  }

  handleGithubClick() {
    window.location.assign("https://github.com/batch11g6/SmartChain")
  }
  render() {
    return (
      <div>
        <HeaderTemplate />
        <SpaceBlock />
        <SpaceBlock />
        <div class="columns">
          <div class="column">
            {/** Empty column for space */}
          </div>
          <div class="column">

            <div class="card">
              <header class="card-header">
                <h4 class="card-header-title color_gray">
                  Smart Chain
                </h4>
                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
              </header>
              <div class="card-content">
                <div class="content color_gray">
                  {/*Scanner block*/}
                  <br />
                  <h1 class="color_gray">Project Mentor: Sangeetha V</h1>

                  <h1 className="color_gray">Tream Members</h1>
                  <table >
                    <thead>
                      <th>Name</th>
                      <th>USN</th>
                    </thead>
                    <tr>
                      <td><a href="https://github.com/dm212">Yashwanth D M</a></td>
                      <td>1KS15CS123</td>
                    </tr>
                    <tr>
                      <td><a href="https://github.com/Phaneendra97">Phaneendra A R</a></td>
                      <td>1KS15CS002</td>
                    </tr>
                    <tr>
                      <td><a href="https://github.com/Mayurakr">Mayura K R</a></td>
                      <td>1KS15CS056</td>
                    </tr>
                    <tr>
                      <td><a href="https://github.com/NikilMunireddy">Nikil M</a></td>
                      <td>1KS15CS066</td>
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
