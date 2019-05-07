import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, CardFooter } from "reactstrap";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, LabelList } from 'recharts';
import ReactAutocomplete from 'react-autocomplete'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Stats from "components/Stats/Stats.jsx";
import Constants from '../../variables/Constants'
import Button from "../../components/CustomButton/CustomButton";

import '../view.css'


class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 500,
      data: [],
      currentCity: '',
      count: '',
      myCityCount: '',
      enteredCity: '',
      tag: []
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
    this.setState({ enteredCity: this.state.value })
    fetch(DOMAIN_URL + CITY_COUNTERFEIT_COUNT, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
      }
    })
      .then((data) => data.json())
      .then((json) => {
        console.log(json.count)
        this.setState({ myCityCount: json.count[0].mycitycount })
      })
  }

  componentDidMount() {
    const { DOMAIN_URL, COUNTERFEIT_LIST_API_PATH, CITY_CORDS } = Constants

    const data = {
      'lati': sessionStorage.getItem('lat'),
      'longi': sessionStorage.getItem('long')
    }

    fetch(DOMAIN_URL + COUNTERFEIT_LIST_API_PATH, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
      }
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

    fetch(DOMAIN_URL + CITY_CORDS, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
      }
    }).then((data) => data.json())
      .then((json) => {

        json.cords.map((element, index) => {

          var cords = [parseFloat(element.lat_long[0]), parseFloat(element.lat_long[1])]
          this.setState({
            tag: this.state.tag.concat(<Marker position={cords}>
              <Popup>{element.city}: {element.count}</Popup>
            </Marker>)
          })
        })
      })

  }


  render() {
    const position = [sessionStorage.getItem('lat'), sessionStorage.getItem('long')]
    return (
      <div className="content">
        <Row>
          <Col xs={12} sm={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle>Serach your city</CardTitle>
                <p className="card-category">Reports based on particular city</p>
              </CardHeader>
              <CardBody>
                <div >
                  <header >
                    <h4 class="color_gray">
                      Search counterfeit case(s) in {this.state.currentCity}
                    </h4>

                  </header>
                  <div class="">
                    <div class=" color_gray">

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
                  <Button size="la" color="warning" onClick={this.submitCityName} round >
                        Search
                  </Button>
                      <br />
                      <h3>
                        <strong color="warning">{this.state.myCityCount}</strong> case(s) reported in
                    <strong> {this.state.enteredCity}</strong>
                      </h3>
                    </div>
                  </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br />
              </CardBody>
              <CardFooter>
                <Stats>
                  {[
                    {
                      i: "fas fa-calendar-alt",
                      t: " Number of reports"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={8}>
            {/** Card for visible for desktop devices only */}
            <Card className="card-chart hide_mobile_block">
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <p className="card-category">City wise reports</p>
              </CardHeader>
              <CardBody>
                <BarChart width={950} height={350} data={this.state.data} barSize={20}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="city" position="center" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#ffc010" >
                    {/**<LabelList dataKey="city" position="inside" angle="90"  /> */}
                  </Bar>
                </BarChart>

              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-warning" /> City Count
                </div>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-check",
                      t: " Data information certified"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>

            {/** Card is visible for mobile devices only */}

          </Col>
        </Row>

        <div class="leaflet-container">
          <Map
            center={position}
            zoom={5}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            {this.state.tag}
            {console.log(this.state.tag)}
          </Map>
        </div>
      </div>
    );
  }
}

export default Icons;
