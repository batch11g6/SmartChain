import React from "react";
import { Card, Table, CardHeader, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";
import NotificationAlert from "react-notification-alert";
import QrReader from 'react-qr-scanner'
import Stats from "components/Stats/Stats.jsx";

import Constants from '../../variables/Constants'
import Button from "../../components/CustomButton/CustomButton";
import '../view.css'
import LocationCords from '../../components/Location/LocationCords'


class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      delay: 2000,
      result: ' ',
      statusUrl: 'https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif',
      isPresent: false,
      details: '',
      displayMessage: "Scan the QR code by placing the product QR code in front of the camera",
      dialogColor: 'gray',
      productDetails: {},

      type: ' ',
      visible: true,
      isExpired: false,
      modileCameraCardDisplay: " ",
      displayvalidationCard: "none"
    }

    this.handleScan = this.handleScan.bind(this);
    this.okClickHandler = this.okClickHandler.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.notify = this.notify.bind(this);
    this.resetContent=this.resetContent.bind(this);
  }

  onDismiss() { 
    this.setState({
      productDetails:{},
      displayMessage:' ',
      dialogColor: 'gray',
    })
  }

  notify() {
    var options = {};
    options = {
      // Top center
      place: "tc",
      message: (
        <div>
          <div>
            <div className="avatar">
                <img src={this.state.statusUrl} alt="GIF" className="img-circle img-no-padding img-responsive" />
            </div>
            <b>{this.state.displayMessage}</b>
          </div>
        </div>
      ),
      type: this.state.type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };

    this.refs.notify.notificationAlert(options);

  }

  handleScan(res) {
    this.setState({
      result: res,
    })

    // Backend data
    var data = {
      'data': this.state.result,
      'lat': sessionStorage.getItem('lat'),
      'long': sessionStorage.getItem('long')
    }

    const { DOMAIN_URL, VALIDITY_API_PATH } = Constants

    if (this.state.result !== null && this.state.result.length === 64) {

      fetch(DOMAIN_URL + VALIDITY_API_PATH, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                "Accept": 'application/json',
         }
      }).then((data) => data.json())
        .then((json) => {
          console.log("json.isPresent", json.isPresent);
          console.log("json.data", json.data.data.productname);
          this.setState({
            isPresent: json.isPresent,
            details: json.details,
            productDetails: json.data.data
          })
          var expiry=json.data.data.expirydate
          var yyyy=expiry.split('-')[2]
          var yyyymmdd=yyyy.concat('-',expiry.split('-')[1],'-',expiry.split('-')[0])
          var unixExpiryTime=parseInt(new Date(yyyymmdd).getTime()/1000)
          var unixNowTime=parseInt(new Date().getTime()/1000)

          if( unixExpiryTime >= unixNowTime ){
            this.setState({isExpired: false})
            console.log('Not expired')
          }
          else{
            this.setState({isExpired:true})
            console.log('Expired')
          }
          var  isItexpired= this.state.isExpired;

          if(isItexpired){
            this.setState({
              statusUrl: 'https://cdn.dribbble.com/users/179979/screenshots/1747462/warning_skull.gif',
              displayMessage: 'The product is Expired, it is adviced not to use this product',
              isPresent: json.isPresent,
              dialogColor: 'red',
              type: "danger",
              modileCameraCardDisplay: "none",
              displayvalidationCard: " "
            })
            this.notify()
          }
          else if ((json.isPresent === true)) {
            this.setState({
              statusUrl: 'https://cdn.dribbble.com/users/900431/screenshots/2346622/green-check.gif',
              displayMessage: 'The product is authenticated. It is a valid product and safe to use',
              dialogColor: 'green',
              isPresent: json.isPresent,
              type: "success",
              modileCameraCardDisplay: "none",
              displayvalidationCard: " "
            })
            this.notify()
          }
          else if ((json.isPresent === false )) {
            this.setState({
              statusUrl: 'https://cdn.dribbble.com/users/179979/screenshots/1747462/warning_skull.gif',
              displayMessage: 'The product seems to be counterfeit it is adviced not to use this product',
              isPresent: json.isPresent,
              dialogColor: 'red',
              type: "danger",
              modileCameraCardDisplay: "none",
              displayvalidationCard: " "
            })
            this.notify()
          }

          else {  // Default display GIF
            this.setState({
              statusUrl: 'https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif',
              dialogColor: 'black',
              displayMessage: "Scan the QR code by placing the product QR code in front of the camera",
              type: ' ',
              displayvalidationCard: "none"
            })
          }
        })
        .catch((err) => console.log(err))
    }
    else {
      console.log('waiting')
    }


  }

  handleError(err) {
    console.error(err)
  }

  okClickHandler(event) {
    this.setState({
      statusUrl: 'https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif',
      dialogColor: 'gray',
      displayMessage: "Scan the QR code by placing the product QR code in front of the camera",
      productDetails: {}
    })
  }

  resetContent(){
    this.setState({
      statusUrl: 'https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif',
      dialogColor: 'gray',
      displayMessage: "Scan the QR code by placing the product QR code in front of the camera",
      productDetails: {},
      modileCameraCardDisplay: " ",
      displayvalidationCard: "none"
    })
  }

  // Notification


  render() {
    const previewStyle = {
      height: 400,
      width: 340,
    }
    const dialogColor = this.state.dialogColor;
    return (
      <div className="content">
        <div >
        <Row >
          <Col xs={12} sm={6} md={6} lg={4}>
            <Card >
              <CardHeader>
                <CardTitle>Product Scanner</CardTitle>
                <p className="card-category">Identify if the product is counterfeit</p>
              </CardHeader>
              <CardBody>
                <center>
                  <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    facingMode="rear"
                  />
                </center>
                {this.state.result}
                <NotificationAlert ref="notify" />
                <br/><br/>
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-camera",
                      t: "Place the QR code in front of the camera"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>


          <Col xs={12} sm={6} md={6} lg={8}>
            <Card >
              <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <p style={{ color: dialogColor }}>{this.state.displayMessage}</p>
              </CardHeader>
              <Row>
                <Col xs={12}>
                  <Card className="card-plain">
                    <CardHeader>
                      <CardTitle tag="h4">Product Details</CardTitle>
                      
                    </CardHeader>
                    <CardBody>
                    <Table responsive>
                    <tbody>
                      <tr>
                        <td className="text-left text-info" >Product Name</td>
                        <td className="text-left">{this.state.productDetails.productname}</td>
                      </tr>
                      <tr>
                        <td className="text-left text-info">Ingredients</td>
                        <td className="text-left">{this.state.productDetails.ingredients}</td>
                      </tr>
                      <tr>
                        <td className="text-left text-info">Manufactured date</td>
                        <td className="text-left">{this.state.productDetails.manufactureddate}</td>
                      </tr>
                      <tr>
                        <td className="text-left text-info">Expiry date</td>
                        <td className="text-left">{this.state.productDetails.expirydate}</td>
                      </tr>
                      <tr>
                        <td className="text-left text-info">Price (&#8377;)</td>
                        <td className="text-left">{this.state.productDetails.price}</td>
                      </tr>
                      <tr>
                        <td className="text-left text-info">Batch number</td>
                        <td className="text-left">{this.state.productDetails.batchnumber}</td>
                      </tr>
                    </tbody>
                    </Table>
                    </CardBody>
                    <Button size="la" color="warning" onClick={this.resetContent} round >
                          Ok
                  </Button>
                  </Card>
                </Col>
              </Row>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-history",
                      t: this.state.displayMessage
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        </div>
      </div>
      
    );
  }
}

export default Dashboard;
