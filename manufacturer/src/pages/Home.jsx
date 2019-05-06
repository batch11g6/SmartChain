import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HeaderTemplate from '../components/HeaderTemplate'
import SpaceBlock from '../components/SpaceBlock'
import Login from '../components/Login'
import '../components/components.css'
import AddProduct from './AddProduct'
import LocationCords from '../components/LocationCords'

export default class Home extends Component {
  constructor() {
    super();

  }


  render() {
    if (sessionStorage.getItem('login') === 'success') {
      return (
        <div>
          <LocationCords />
          <HeaderTemplate />
          <div class="card"></div>
          <SpaceBlock />
          <div class="columns">
            <div class="column">
              <div>
                <img src="https://cdn.dribbble.com/users/869641/screenshots/4528277/pcori_animation_revised-copy.gif"
                  height="200%"
                />
              </div>
            </div>
            <div class="column color_gray padding" >
              <h1>Smart Chain Smart Portal</h1>
              <br /><br />
              <p>
                <tab1>This is an interface to add medical suppliments manufactured by valid manufacturer to
                the Blockchain. The manufacturer can add medical suppliment details through this portal
                or can use API endpoints to automate the process. The new product can be added by clicking
                the add product below.
              <br />
                </tab1>

              </p>
              <br /><br />
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
              <a class="button is-info is-rounded" >
                <Link to={'/addproduct'}><p style={{ color: "#FFFFFF" }}>Add Product</p></Link>
              </a>
              &nbsp; &nbsp; &nbsp; &nbsp;

              <a href="/viewproducts" class="button is-info is-rounded" >
                <Link to={'/viewproducts'}><p style={{ color: "#FFFFFF" }}>Track Product</p></Link>
              </a>
              &nbsp; &nbsp; &nbsp; &nbsp;

              <br /><br /><br />
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <Login />
        </div>
      );
    }
  }
}
