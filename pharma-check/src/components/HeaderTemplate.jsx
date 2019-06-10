import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../assets/smartchain.jpg'
import userlogo from '../assets/user-group.png'
import './components.css'


export default class HeaderTemplate extends Component {
    constructor(){
        super()

        this.handleLogout= this.handleLogout.bind(this);
    }

    handleLogout(){
        sessionStorage.removeItem('login')
        sessionStorage.removeItem('username')
        window.location.reload(1)
    }
    render() {
        return (
            <div class="sticky header_template">
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
                        <a href="/" >
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
                        <a href="/about" >
                            <Link to={'/about'}>About</Link>
                        </a>
                    </span>
                </a>
            </p>
            <p class="control">
                <a class=" ">
                    <span class="icon">

                    </span>
                    <span>
                        <a href="/"  onClick={this.handleLogout}>
                            <Link to={'/'}>Logout</Link>
                        </a>
                    </span>
                </a>
            </p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<p class="control">
                <a class=" ">
                    <span class="icon">
                        <img src={userlogo}
                            width="120%"
                        />
                    </span>&nbsp;&nbsp;
<span style={{ color: "#FF500d" }}>
                        {sessionStorage.getItem('username')}
                    </span>
                </a>
            </p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
</div>
    </div>
</div>
</nav>

            </div>
        )
    }
}
