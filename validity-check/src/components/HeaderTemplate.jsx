import React, { Component } from 'react'
import {Header,HeaderRow,Drawer,Navigation,Button,Layout,Content} from 'react-mdl'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SpaceBlock from './SpaceBlock'


export default class HeaderTemplate extends Component {
  render() {
    return (
<div className="demo-big-content">
    <Layout>
        <Header waterfall hideTop>
            <HeaderRow title="Smart Chain">
          
            </HeaderRow>
            <HeaderRow>
                <Navigation>
                <a href="/">
                      <Link to={'/'}><Button colored style={{color: '#fff'}}>Home</Button></Link>
                </a>
                <a href="/about">
                      <Link to={'/about'}><Button colored style={{color: '#fff'}}>About</Button></Link>
                </a>
                </Navigation>
            </HeaderRow>
        </Header>

        {/** Side Drawer navigation window */}
        <Drawer title="Smart Chain">
            <Navigation>
                <a href="/">
                      <Link to={'/'}><Button colored style={{color: '#808080	'}}>Home</Button></Link>
                </a>
                <a href="/about">
                      <Link to={'/about'}><Button colored style={{color: '#808080	'}}>About</Button></Link>
                </a>
            </Navigation>
        </Drawer>

        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
    <SpaceBlock/>
    
</div>
    )
  }
}
