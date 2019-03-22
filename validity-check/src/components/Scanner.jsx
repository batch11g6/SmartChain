import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import Validationcard from './Validationcard'
import './components.css';


// IP info access tocken 7d336261dbe2f2

class Scanner extends Component {
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
      productDetails:{}
    }
    // https://dribbble.com/shots/3576821-Scan-and-Climb
    this.handleScan = this.handleScan.bind(this);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }


  //Not required
  //Dialog -----
  // set openDialog to false to disable 
  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
    this.setState({
      statusUrl: 'https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif',
      dialogColor: 'black',
      displayMessage: "Scan the QR code by placing the product QR code in front of the camera"
    });
  }
  
  //------
  //responser to @validity check

  handleScan(res) {
    this.setState({
      result: res,
    })

    // Backend data
    var data = { 
      'data': this.state.result
     }

    var PATH_URL = 'api/product/isvaild/'
    var DOMAIN_URL = 'https://smartchainrestapi.herokuapp.com/'
    //var DOMAIN_URL ='http://127.0.0.1:8000/'
    {/*
      Check the length of string  like "this.state.result.length === 20"  
      so that the unwanted strings  reaching server can be avoided
    */}
    var hash_value=this.state.result;

    if (this.state.result !== null) {

      fetch(DOMAIN_URL + PATH_URL, {
        method: 'POST',
        body: JSON.stringify(data)
      }).then((data) => data.json())
        .then((json) => {
          // Response from backend
          console.log("json.isPresent", json.isPresent);
          console.log("json.data",json.data.data.productname);
          //console.log(json.details.data.productname);

          this.setState({
            isPresent: json.isPresent,
            details: json.details,
            productDetails:json.data.data
          })
          if (json.isPresent===true) {
            this.setState({
              statusUrl: 'https://cdn.dribbble.com/users/900431/screenshots/2346622/green-check.gif',
              displayMessage: 'The product is authenticated. It is a valid product and safe to use',
              isPresent: json.isPresent,
              dialogColor: 'green'
            })
            // get the data from bigchain db using the hash i.e; "this.state.result"


            // Open dialog box
            this.handleOpenDialog();
          }

          else if (json.isPresent === false) {
            this.setState({
              statusUrl: 'https://cdn.dribbble.com/users/179979/screenshots/1747462/warning_skull.gif',
              displayMessage: 'The product seems to be counterfeit it is adviced not to use this product',
              isPresent: json.isPresent,
              dialogColor: 'orange'
            })


            this.handleOpenDialog();
          }

          else {  // Default display GIF
            this.setState({
              statusUrl: 'https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif',
              dialogColor: 'black',
              displayMessage: "Scan the QR code by placing the product QR code in front of the camera"
            })
          }
        })
        .catch((err) => console.log(err))
    }
    else{
      console.log('waiting')
    }

    
  }

  handleError(err) {
    console.error(err)
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
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
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
          <table class="table">
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
            </div>
            </div>  
          </div>
          </div>


          <div class="column">
              <Validationcard  
                    statusUrlImage={this.state.statusUrl} 
                    displayMessage={this.state.displayMessage}
                    dialogColor={this.state.dialogColor}
                    isPresent={this.state.isPresent}
                    resultCode={this.state.result}
                    productDetails={this.state.productDetails}
              />
          </div>

        </div>

    )
  }
}
export default Scanner;
