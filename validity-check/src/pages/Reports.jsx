import React, { Component } from 'react'
import HeaderTemplate from '../components/HeaderTemplate'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, LabelList } from 'recharts';
import Constants from '../Constants'
import SpaceBlock from '../components/SpaceBlock'
import '../components/components.css'
import ReactAutocomplete from 'react-autocomplete'


/**
 * TODO:
 * Get all the details about the counterfeit reports
 * Display then city wise
 * 
 */

export default class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 500,
      data: [],
      currentCity: '',
      count: '',
      myCityCount: ''
    }

    this.AutocompleteStateChanged = this.AutocompleteStateChanged.bind(this);
    this.submitCityName = this.submitCityName.bind(this);
  }

  AutocompleteStateChanged(event) {
    this.setState({ value: event.target.value })
  }

  submitCityName(event) {
    const { DOMAIN_URL, CITY_COUNTERFEIT_COUNT } = Constants;
    const data = { 'city': this.state.value }
    fetch(DOMAIN_URL + CITY_COUNTERFEIT_COUNT, {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((data) => data.json())
      .then((json) => {
        console.log(json.count)
        this.setState({ myCityCount: json.count[0].mycitycount })
      })
  }

  componentDidMount() {
    const { DOMAIN_URL, COUNTERFEIT_LIST_API_PATH } = Constants

    const data = {
      'lati': sessionStorage.getItem('lat'),
      'longi': sessionStorage.getItem('long')
    }

    fetch(DOMAIN_URL + COUNTERFEIT_LIST_API_PATH, {
      method: 'POST',
      body: JSON.stringify(data)
    }).then((data) => data.json())
      .then((json) => {
        console.log(json.count)
        console.log(json.your_city)
        this.setState({
          data: json.count,
          currentCity: json.your_city[0].city,
          count: json.your_city[0].count
        })

      })

  }

  render() {

    return (
      <div>
        <HeaderTemplate />
        <SpaceBlock />
        <SpaceBlock />
        <div class="columns">

          {/** For Destops only */}
          <div class="column hide_block">
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

                  <center>
                    <BarChart width={850} height={400} data={this.state.data} barSize={20}>
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
                  Search counterfeit case(s) in {this.state.currentCity}
                </h4>
                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
              </header>
              <div class="card-content">
                <div class="content color_gray">

                  <ReactAutocomplete class="combobox is-info"
                    items={this.state.data}
                    shouldItemRender={(item, value) => item.city.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.city}
                    renderItem={(item, highlighted) =>
                      <div
                        key={item.city}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                      >
                        {item.city}
                      </div>
                    }
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value })}
                    onSelect={value => this.setState({ value })}
                  />

                  &nbsp;&nbsp;&nbsp;
                 <a class="button is-link is-rounded " onClick={this.submitCityName} >Search</a>
                  <br />{this.state.myCityCount} case(s) reported in {this.state.value}

                </div>
              </div>
            </div>
          </div>


          {/** Only for mobile devices */}
          <div class="column hide_desktop_block">
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

                  <BarChart width={320} height={300} data={this.state.data} barSize={20}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="city" position="center" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#0136EA" >
                      {/**<LabelList dataKey="city" position="inside" angle="90"  /> */}
                    </Bar>
                  </BarChart>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    )
  }
}
