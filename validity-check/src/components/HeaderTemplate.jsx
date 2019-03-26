import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../assets/smartchain.jpg'


export default class HeaderTemplate extends Component {
    render() {
        return (
            <div>
                <nav class="navbar is-transparent">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://github.com/batch11g6/SmartChain">
                            <img src={logo} alt="Smart Chain" width="52" height="58" />
                        </a>
                        <h6 class="navbar-item">Smart Chain</h6>
                        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="field is-grouped">

                                <p class="control">
                                    <a class="">
                                        <span class="icon">

                                        </span>
                                        <span>
                                            <a href="%PUBLIC_URL%/" >
                                                <Link to={'/'}>Home</Link>
                                            </a>
                                        </span>
                                    </a>
                                </p>

                                <p class="control">
                                    <a class=" ">
                                        <span class="icon">

                                        </span>
                                        <span>
                                            <a href="%PUBLIC_URL%/about" >
                                                <Link to={'/about'}>About</Link>
                                            </a>
                                        </span>
                                    </a>
                                </p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
