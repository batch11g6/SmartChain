import React, { Component } from 'react'
import SpaceBlock from '../components/SpaceBlock'
import Constants from '../Constants'
import HeaderTemplate from '../components/HeaderTemplate'
import factorylogo from '../assets/factory-1.gif'
import './components.css'


export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            userid: '',
            password: ''
        }
        this.handleuserIDChange = this.handleuserIDChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleuserIDChange(event) {
        this.setState({ userid: event.target.value })
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value })
    }

    handleSubmit() {
        const { DOMAIN_URL, PASSWORD_CHECK } = Constants;
        var pwd = this.state.password
        var user = this.state.userid
        var data = { 'user': user, 'password': pwd }

        fetch(DOMAIN_URL + PASSWORD_CHECK, {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            }
        }).then((data) => data.json())
            .then((res) => {
                console.log(res)
                console.log(res.status)
                if (res.status === true) {
                    sessionStorage.setItem('login', 'success')
                    sessionStorage.setItem('username', this.state.userid)
                    sessionStorage.setItem('secret', res.secret)
                    window.location.reload(1)
                }
            })
            .catch(function (err) { console.log("ERROR ", err) })
    }

    render() {
        return (
            <div>
                <HeaderTemplate />
                <div class="card"></div>
                <SpaceBlock />
                <div class="columns">
                    <div class="column">
                        <div >
                            <div class="columns">
                                <div class="column">
                                    <div style={{ padding: "40px" }}>
                                        <img src={factorylogo}
                                            width="90%"
                                            height="90%"
                                        />
                                    </div>
                                </div>
                                <div class="column color_gray padding" >
                                    <br></br>
                                    <p class="color_gray">
                                        <tab1>
                                            A Smart portal to add new product to blockchain
                                            DB and also track product location  details.
                                            This portal  provides simple interface to
                                            interact with  the backend server.
                                        </tab1>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="column">

                        <div >
                            <SpaceBlock />
                            <center class="scale_image">
                                <div style={{ width: '50%' }}>
                                    <div class="field">
                                        <div class="control">
                                            <input class="input is-info" type="text" placeholder="Manufacturer ID" onChange={this.handleuserIDChange} />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="control">
                                            <input class="input is-info" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                                        </div>
                                    </div>
                                    <div class="control ">
                                        <button class="button is-info is-rounded" onClick={this.handleSubmit}>Submit</button>
                                    </div>
                                </div>
                            </center>
                            <SpaceBlock />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
