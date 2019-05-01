import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardFooter, Row, Col } from "reactstrap";
import Button from "../../components/CustomButton/CustomButton";
import './about.css'


class User extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>

          <Col md={8} xs={12}>
            <Card className="card-user color_gray padding hide_mobile_block">
              <CardHeader>
                <CardTitle>About Smart Chain</CardTitle>
              </CardHeader>
              <CardBody>
                 <p>
                 <tab1>This application helps common man to identify real and counterfeit drugs.
                 The main objective of this application is to identify counterfeit drugs and 
                 ensure the brand safety. <br/>
                 First the product should be authenticated from a valid pharma shop. Then the user can 
                 sacn the QR code on the product to get information about product, such as manufactured date
                 expiry date, price and other related information.
                 </tab1>
                 </p>
                 <tab2></tab2>
                 <img src="https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif"
                 width="30%"
                 height="20%"
                 />
                  <tab2></tab2>
                 <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c444.png"
                 width="10%"
                 />
                  <tab2></tab2>
                  <img src="https://cdn.dribbble.com/users/900431/screenshots/2346622/green-check.gif"
                  width="20%"
                  />
              </CardBody>
            </Card>
            {/** Only mobile */}
            <Card className="card-user color_gray padding hide_desktop_block">
              <CardHeader>
                <CardTitle>About Smart Chain</CardTitle>
              </CardHeader>
              <CardBody>
                 <p>
                 <tab1>This application helps common man to identify real and counterfeit drugs.
                 The main objective of this application is to identify counterfeit drugs and 
                 ensure the brand safety. <br/>
                 First the product should be authenticated from a valid pharma shop. Then the user can 
                 sacn the QR code on the product to get information about product, such as manufactured date
                 expiry date, price and other related information.
                 </tab1>
                 </p>
                
                 <img src="https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif"
                 width="30%"
                 height="20%"
                 />
                  <tab3></tab3>
                 <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c444.png"
                 width="10%"
                 />
                  <tab3></tab3>
                  <img src="https://cdn.dribbble.com/users/900431/screenshots/2346622/green-check.gif"
                  width="20%"
                  />
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>

<Card>
<CardHeader>
    <CardTitle tag="h4">Project Mentor</CardTitle>
  </CardHeader>
 <CardBody>
        <Row>
          <Col xs={2} md={2}>
            <div className="avatar">
              <img src="https://avatars2.githubusercontent.com/u/4721758?s=88&v=4" alt="Yashwanth" className="img-circle img-no-padding img-responsive" />
            </div>
          </Col>
          <Col xs={7} md={7}>
            <a href="">Sangeetha V</a>
            <span className="text-danger">
            <br />
              <small>
              Assoc. Professor K.S.I.T., Bengaluru
              </small>
            </span>
            
          </Col>
          <Col xs={3} md={3} className="text-right">
            <Button size="sm" color="success" round icon outline>
              <i className="fa fa-envelope"></i>
            </Button>
          </Col>
        </Row>
     
 </CardBody>
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
                1KS15CS002
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
                1KS15CS056
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
                1KS15CS066
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
    <br/><br/>
  </CardBody>
</Card>
</Col>
        </Row>
      </div>
    );
  }
}

export default User;
