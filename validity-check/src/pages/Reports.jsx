import React, { Component } from 'react'
import HeaderTemplate from '../components/HeaderTemplate'
import {BarChart, CartesianGrid, XAxis,YAxis, Tooltip, Legend, Bar} from 'recharts';
import Constants from '../Constants'


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
        <HeaderTemplate/>
        <BarChart width={730} height={250} data={this.state.data} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="city" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#0136EA" />
        </BarChart>
      </div>
    )
  }
}
