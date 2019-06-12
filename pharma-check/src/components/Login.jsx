import React, { Component } from 'react'
import SpaceBlock from '../components/SpaceBlock'
import Constants from '../Constants'
import HeaderTemplate from '../components/HeaderTemplate'
import scanGIF from '../assets/scan_gif.gif'
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
        const { DOMAIN_URL, PAHRMA_LOGIN } = Constants;
        var pwd = this.state.password
        var user = this.state.userid
        var data = { 'user': user, 'password': pwd }


        console.log(DOMAIN_URL, PAHRMA_LOGIN, data)

        fetch(DOMAIN_URL + PAHRMA_LOGIN, {
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
                <br />
                <center><h1 style={{ color: "#808080" }}>Pharma Portal</h1></center>
                <br />
                <div class="columns">
                    <div class="column">
                        <div >
                            <div class="columns">
                                <div class="column">
                                    <div style={{ padding: "40px" }}>
                                        <img src={scanGIF}
                                            width="90%"
                                            height="90%"
                                        />
                                    </div>
                                </div>
                                <div class="column color_gray padding" >
                                    <br></br>
                                    <p class="color_gray">
                                        <tab1>
                                            A smart portal for pharmacists to validate and
                                            authenticate the medical suppliments. The portal provides
                                            a simple and secured interface to validate the medical suppliments
                                            if any product seems to be counterfeit then the
                                            product is discarded.
                                        </tab1>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="column">

                        <div >
                            <SpaceBlock />
                            <center>
                                <div style={{ width: '50%' }}>
                                    <div class="field">
                                        <div class="control">
                                            <input class="input is-info" type="text" placeholder="Pharma ID" onChange={this.handleuserIDChange} />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="control">
                                            <input class="input is-info" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                                        </div>
                                    </div>
                                    <div class="control ">
                                        <button class="button is-info is-rounded button_hover" onClick={this.handleSubmit}>Login</button>
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
