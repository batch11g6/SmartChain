import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col,CardFooter } from "reactstrap";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, LabelList } from 'recharts';

import Stats from "components/Stats/Stats.jsx";
import Constants from '../../variables/Constants'


class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 500,
      data: [],
      currentCity: '',
      count: '',
      myCityCount: ''
    }
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
      <div className="content">
        <Row>
          <Col xs={12} sm={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle>Email Statistics</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody>
                Search
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Opened{" "}
                  <i className="fa fa-circle text-warning" /> Read{" "}
                  <i className="fa fa-circle text-danger" /> Deleted{" "}
                  <i className="fa fa-circle text-gray" /> Unopened
                </div>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-calendar-alt",
                      t: " Number of emails sent"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <Card className="card-chart">
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
                  <i className="fa fa-circle text-warning" />City Count
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
          </Col>
        </Row>
      </div>
    );
  }
}

export default Icons;
