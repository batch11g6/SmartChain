import React, { Component } from 'react'
import {Header,HeaderRow,Drawer,Navigation,Button} from 'react-mdl'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default class HeaderTemplate extends Component {
  render() {
    return (
      <div>
        <Header >
            <HeaderRow title="SmartChain" />
            <Navigation>
                  <a href="/">
                      <Link to={'/'}><Button colored style={{color: '#fff'}}>Home</Button></Link>
                  </a>
                  
                  <a href="/about">
                      <Link to={'/about'}><Button colored style={{color: '#fff'}}>About</Button></Link>
                  </a>
            </Navigation>
        </Header>
        <Drawer title="SmartChain"/>
      </div>
    )
  }
}
