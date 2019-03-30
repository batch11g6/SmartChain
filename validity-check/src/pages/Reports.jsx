import React, { Component } from 'react'
import HeaderTemplate from '../components/HeaderTemplate'
import {BarChart, CartesianGrid, XAxis,YAxis, Tooltip, Legend, Bar, LabelList} from 'recharts';
import Constants from '../Constants'
import SpaceBlock from '../components/SpaceBlock'
import '../components/components.css'


/**
 * TODO:
 * Get all the details about the counterfeit reports
 * Display then city wise
 * 
 */

export default class Reports extends Component {
    constructor(props){
        super(props);
        this.state={
            width: 500,
            data:[]
        }
    }

    componentDidMount(){
        const {DOMAIN_URL, COUNTERFEIT_LIST_API_PATH}=Constants
        fetch(DOMAIN_URL+COUNTERFEIT_LIST_API_PATH, {
            method: 'POST',
        }).then((data)=>data.json())
        .then((json)=>{
            console.log(json)
            this.setState({data:json.count})
        })
    }

  render() {

    return (
      <div>
        <HeaderTemplate />
        <SpaceBlock />
        <SpaceBlock />
        <div class="columns">
          <div class="column">
         <div class="card">
              <header class="card-header">
                <h4 class="card-header-title color_gray">
                  counterfeit Reports
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
                  <center>
                  <BarChart width={350} height={300} data={this.state.data} barSize={20}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="city" position="center" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#0136EA" >
                        {/**<LabelList dataKey="city" position="inside" angle="90"  /> */}
                    </Bar>
                  </BarChart>
                  </center>
                </div>
              </div>
            </div>

          </div>
          <div class="column">
          <div class="card">
              <header class="card-header">
                <h4 class="card-header-title color_gray">
                  Your City
                </h4>
                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
              </header>
              <div class="card-content">
                <div class="content color_gray">
                  {/*Scanner block
                  
                   select additional_details,count(additional_details) from spurious_list 
                   where (location_lat -12.98) < 0.003 and (location_long -77.54)<0.007 
                    group by additional_details;

                  */}
                 
                </div>
              </div>
            </div>

          
          </div>
        </div>

      </div>
    )
  }
}
