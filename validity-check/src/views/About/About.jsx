import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardFooter, Row, Col } from "reactstrap";
import Button from "components/CustomButton/CustomButton.jsx";


class User extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={4} xs={12}>

            <Card>
              <CardHeader>
                <CardTitle tag="h4">Team Members</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col xs={2} md={2}>
                        <div className="avatar">
                          <img src="https://avatars0.githubusercontent.com/u/42132551?s=460&v=4" alt="Yashwanth" className="img-circle img-no-padding img-responsive" />
                        </div>
                      </Col>
                      <Col xs={7} md={7}>
                        <a href="https://github.com/dm212">Yashwanth DM</a>
                        <span className="text-danger">
                        <br />
                          <small>
                            1KS15CS123
                          </small>
                        </span>
                      </Col>
                      <Col xs={3} md={3} className="text-right">
                        <Button size="sm" color="success" round icon outline>
                          <i className="fa fa-envelope"></i>
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  
                  <li>
                    <Row>
                      <Col xs={2} md={2}>
                        <div className="avatar">
                          <img src="https://avatars3.githubusercontent.com/u/22639800?s=460&v=4" alt="Yashwanth" className="img-circle img-no-padding img-responsive" />
                        </div>
                      </Col>
                      <Col xs={7} md={7}>
                        <a href="https://github.com/Phaneendra97">Phaneendra A R</a>
                        <span className="text-danger">
                        <br />
                          <small>
                            1KS15CS123
                          </small>
                        </span>
                        
                      </Col>
                      <Col xs={3} md={3} className="text-right">
                        <Button size="sm" color="success" round icon outline>
                          <i className="fa fa-envelope"></i>
                        </Button>
                      </Col>
                    </Row>
                  </li>

                  <li>
                    <Row>
                      <Col xs={2} md={2}>
                        <div className="avatar">
                          <img src="https://avatars1.githubusercontent.com/u/13505319?s=460&v=4" alt="Yashwanth" className="img-circle img-no-padding img-responsive" />
                        </div>
                      </Col>
                      <Col xs={7} md={7}>
                        <a href="https://github.com/Mayurakr">Mayura K R</a>
                        <span className="text-danger">
                        <br />
                          <small>
                            1KS15CS123
                          </small>
                        </span>
                        
                      </Col>
                      <Col xs={3} md={3} className="text-right">
                        <Button size="sm" color="success" round icon outline>
                          <i className="fa fa-envelope"></i>
                        </Button>
                      </Col>
                    </Row>
                  </li>

                  <li>
                    <Row>
                      <Col xs={2} md={2}>
                        <div className="avatar">
                          <img src="https://avatars3.githubusercontent.com/u/32808428?s=460&v=4" alt="Yashwanth" className="img-circle img-no-padding img-responsive" />
                        </div>
                      </Col>
                      <Col xs={7} md={7}>
                        <a href="https://github.com/NikilMunireddy">Nikil M</a>
                        <span className="text-danger">
                        <br />
                          <small>
                            1KS15CS123
                          </small>
                        </span>
                        
                      </Col>
                      <Col xs={3} md={3} className="text-right">
                        <Button size="sm" color="success" round icon outline>
                          <i className="fa fa-envelope"></i>
                        </Button>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col md={8} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>About Smart Chain</CardTitle>
              </CardHeader>
              <CardBody>
                 This application helps common man to identifly real and counterfeit drugs.
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default User;
