import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import Validationcard from './Validationcard'
import './components.css';
import Constants from '../Constants'
import greencheck from '../assets/green-check.gif'
import warningGIF from '../assets/gif_credit_risk.gif'
import defaultGif from '../assets/scan_gif.gif'
import loadgif from '../assets/load.gif'
var loadingmessage = require('../assets/loadingmessage.json')


// IP info access tocken 7d336261dbe2f2

class Scanner extends Component {

  constructor(props) {
    super(props)
    this.state = {
      delay: 2000,
      result: ' ',
      statusUrl: defaultGif,
      isPresent: false,
      details: '',
      displayMessage: "Scan the QR code by placing the product QR code in front of the camera",
      dialogColor: 'gray',
      productDetails: {},
      loadingstatus: "",
    }
    // https://dribbble.com/shots/3576821-Scan-and-Climb
    this.handleScan = this.handleScan.bind(this);
    this.okClickHandler = this.okClickHandler.bind(this);
  }


  handleScan(res) {
    this.setState({
      result: res,
    })
    const loadingFlexActive =
      <div id="modal-id" class="modal modal-fx-fadeInScale is-active" >
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <p>{loadingmessage[Math.floor(Math.random() * (13) + 1)]}</p>
            <center><img src={loadgif} width="50%" height="50%" /></center>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
    // Backend data
    var data = {
      'data': this.state.result,
      'lat': sessionStorage.getItem('lat'),
      'long': sessionStorage.getItem('long')
    }


    const { DOMAIN_URL, PHARMA_CHECK_PATH_URL } = Constants
    {/*
      Check the length of string  like "this.state.result.length === 64"  
      so that the unwanted strings  reaching server can be avoided
    */}

    if (this.state.result !== null && this.state.result.length === 64) {
      this.setState({ loadingstatus: loadingFlexActive })

      fetch(DOMAIN_URL + PHARMA_CHECK_PATH_URL, {
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
          if (json.isPresent === true) {
            this.setState({
              statusUrl: greencheck,
              displayMessage: 'The product is authenticated. It is a valid product and safe to use',
              isPresent: json.isPresent,
              dialogColor: 'green',
              loadingstatus: '',
            })
          }

          else if (json.isPresent === false) {
            this.setState({
              statusUrl: warningGIF,
              displayMessage: 'The product seems to be counterfeit it is adviced not to use this product',
              isPresent: json.isPresent,
              dialogColor: 'orange',
              loadingstatus: '',
            })
          }

          else {  // Default display GIF
            this.setState({
              statusUrl: defaultGif,
              dialogColor: 'black',
              displayMessage: "Scan the QR code by placing the product QR code in front of the camera",
              loadingstatus: '',
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
      statusUrl: defaultGif,
      dialogColor: 'black',
      displayMessage: "Scan the QR code by placing the product QR code in front of the camera",
      productDetails: {},
      loadingstatus: '',
    })
  }

  render() {
    // Styling for Scanner
    const previewStyle = {
      height: 400,
      width: 420,
    }

    return (

      <div class="columns">
        {/**First column */}
        <div class="column">
          <section>
            <div >
              <header class="card-header">
                <p class="card-header-title ">
                  Scan the QR Code
              </p>
                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
              </header>
              <div class="card-content">
                <div class="content">
                  {/*Scanner block*/}
                  <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    facingMode="rear"
                  />
                  <table class="table is-striped is-bordered">
                    <thead>
                      <th>ID</th>
                      <th>Valid</th>
                      <th>Details</th>
                    </thead>
                    <tr>
                      <td>{this.state.result}</td>
                      <td>{this.state.isPresent}</td>
                      <td>{this.state.details}</td>
                    </tr>
                  </table>
                  {this.state.loadingstatus}

                </div>
              </div>
            </div>
          </section>
        </div>


        <div class="column">
          <section>
            <Validationcard
              statusUrlImage={this.state.statusUrl}
              displayMessage={this.state.displayMessage}
              dialogColor={this.state.dialogColor}
              isPresent={this.state.isPresent}
              resultCode={this.state.result}
              productDetails={this.state.productDetails}
            />
            <br />
            <a class="button is-info is-rounded" onClick={this.okClickHandler}>Clear</a>
            <br /><br /><br /><br />
          </section>
        </div>
      </div>

    )
  }
}
export default Scanner;
