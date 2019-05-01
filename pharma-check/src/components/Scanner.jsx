import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import Validationcard from './Validationcard'
import './components.css';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchProductDetails } from '../actions/fetchDetails'

class Scanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 2000,
      result: ' ',
    }
    this.handleScan = this.handleScan.bind(this);
    this.okClickHandler = this.okClickHandler.bind(this);
  }


  handleScan(res) {
    this.setState({
      result: res,
    })

    var data = {
      'data': this.state.result,
      'lat': sessionStorage.getItem('lat'),
      'long': sessionStorage.getItem('long')
    }

    {/*
      Check the length of string  like "this.state.result.length === 64"  
      so that the unwanted strings  reaching server can be avoided
    */}

    if (this.state.result !== null && this.state.result.length === 64) {
      this.props.fetchProductDetails(data)
      console.log('this.props.resultdata', this.props.resultdata)
    }
    else {
      console.log('Waiting...')
    }

  }


  handleError(err) {
    console.error(err)
  }

  okClickHandler(event) {
    window.location.reload(1)
  }


  render() {
    const previewStyle = {
      height: 400,
      width: 420,
    }

    console.log('Scanner ', this.props.resultdata)
    return (

      <div class="columns">
        {/**First column */}
        <div class="column">
          <div class="card">
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
                    <td>{this.props.resultdata.isPresent}</td>
                    <td>{this.props.resultdata.details}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          {console.log("this.props.resultdata.productDetails", this.props.resultdata.productDetails)}
          <Validationcard />
          <br />
          <a class="button is-link is-rounded" onClick={this.okClickHandler}>OK</a>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  resultdata: state.resultdata.detail
})
export default connect(mapStateToProps, { fetchProductDetails })(Scanner);
