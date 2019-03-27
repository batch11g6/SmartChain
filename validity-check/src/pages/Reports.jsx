import React, { Component } from 'react'
import HeaderTemplate from '../components/HeaderTemplate'

/**
 * TODO:
 * Get all the details about the counterfeit reports
 * Display then city wise
 * 
 */

export default class Reports extends Component {
    constructor(){
        super();

    }

    componentDidMount(){
        // fetch all city details
        fetch()
    }
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
