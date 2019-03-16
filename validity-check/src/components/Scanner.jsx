import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import { Card, CardText, Grid, Cell, DataTable, TableHeader, Dialog, DialogActions, DialogTitle, Button } from 'react-mdl'
import DialogBox from './DialogBox'

import './components.css';
import MapView from './MapView'


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
      dialogColor: 'gray'
    }
    // https://dribbble.com/shots/3576821-Scan-and-Climb
    this.handleScan = this.handleScan.bind(this);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }


  //Not required
  componentDidMount() {
    fetch("http://www.geoplugin.net/json.gp")
      .then(response => response.json())
      .then(data => { console.log(data) })
      .catch(error => console.error(error))
  }
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
  }
  //------
  //responser to @validity check

  handleScan(res) {
    this.setState({
      result: res,
    })

    var data = { 'data': res }

    var PATH_VALIDITY_CHECK = 'api/product/isvaild/'
    //var URL = 'http://127.0.0.1:8000/'
    var URL = 'https://smartchainrestapi.herokuapp.com/'
    {/*
      Check the length of string  like "this.state.result.length === 20"  
      so that the unwanted strings  reaching server can be avoided
    */}
    if (this.state.result !== null) {

      fetch(URL + PATH_VALIDITY_CHECK, {
        method: 'POST',
        body: JSON.stringify(data)
      }).then((data) => data.json())
        .then((json) => {
          console.log("json.isPresent", json.isPresent);
          console.log(json.details);
          this.setState({
            isPresent: json.isPresent,
            details: json.details
          })
          if (json.details === 'ok this'|| json.isPresent===true) {
            this.setState({
              statusUrl: 'https://cdn.dribbble.com/users/900431/screenshots/2346622/green-check.gif',
              displayMessage: 'The product is authenticated. It is a valid product and safe to use',
              isPresent: json.isPresent,
              dialogColor: 'green'
            })
            this.handleOpenDialog();
          }
          else if (json.isPresent === false && json.details === 'Spurious') {
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
    const previewStyle = {
      height: 400,
      width: 420,
    }
    return (
      <div >
        <div >
          <Grid className="demo-grid-2">
            <Cell col={7}>
              <Card shadow={0} style={{ width: '100%', height: '600px', margin: 'auto' }}>
                <CardText className="">
                  {/**
            <QrReader 
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
                facingMode="rear"
            />
            */}
                  <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    facingMode="rear"
                  />
                  <DataTable
                    shadow={0}
                    rows={[{ ispresent: this.state.isPresent, code: this.state.result, details: this.state.details },]}
                    className="data_table"
                  >
                    <TableHeader numeric name="ispresent" tooltip="QR Code value">Is Valid</TableHeader>
                    <TableHeader numeric name="code" tooltip="QR Code value">Code</TableHeader>
                    <TableHeader numeric name="details" tooltip="Details">Details</TableHeader>
                  </DataTable>
                </CardText>
              </Card>
            </Cell>

            {/* Remove this card content to add authentication details*/}
            {/** 
      -----Only for Desktops devices----
      -----Hide for mobile phones------
      */}
            <Cell col={5} >
              <Card class="hide_block" shadow={0} style={{ width: '100%', height: '900px', margin: 'auto', right: "250px" }}>
                <CardText>
                  <Card shadow={0} style={{ width: '100%', height: '584px', }}>
                    <img src={this.state.statusUrl} style={{ height: "300px", }} alt="Status logo" />
                    <Card border class="mdl-card__supporting-text" style={{ color: this.state.dialogColor }}>
                      {this.state.displayMessage}
                    </Card>
                  </Card>
                </CardText>
              </Card>
            </Cell>
          </Grid>

          {/** 
      -----Only for mobile devices----
      */}
          <Card class="hide_desktop_block" shadow={0} style={{ width: '100%', height: '500px', margin: 'auto' }}>
            <CardText>
              <Card shadow={0} style={{ width: '100%', height: '500px', }}>
                <img src={this.state.statusUrl} style={{ height: "300px", }} alt="Status logo" />
                <div border class="mdl-card__supporting-text" style={{ color: this.state.dialogColor }}>
                  {this.state.displayMessage}
                </div>
              </Card>
            </CardText>
          </Card>

          Content
            <br></br>
          Long: {sessionStorage.getItem("long")} &nbsp;
          Lat: {sessionStorage.getItem("lat")}
          <MapView />
        </div>
        {/**
      Dialog box 
      */}
            <Dialog open={this.state.openDialog}>
              <DialogTitle>Result</DialogTitle>
                  <DialogBox dialogColor={this.state.dialogColor} statusUrl={this.state.statusUrl} displayMessage={this.state.displayMessage} />
              <DialogActions>
                  <Button type='button' onClick={this.handleCloseDialog}>OK</Button>
              </DialogActions>
            </Dialog>
             </div>
    )
  }
}
export default Scanner;
