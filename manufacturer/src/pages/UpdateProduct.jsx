import React, { Component } from 'react'
import SpaceBlock from '../components/SpaceBlock'
import HeaderTemplate from '../components/HeaderTemplate'
import Constants from '../Constants'
import UpdateProductDetails from '../components/UpdateProductDetails'
import '../components/components.css'
import gepezet from '../assets/gepezet.gif'


export default class UpdateProduct extends Component {
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
        var data = { "user": user, "password": pwd }
       
        fetch(DOMAIN_URL + PASSWORD_CHECK, {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                "Accept": 'application/json',
         }
        }).then((data) => data.json())
            .then((json) => {
                console.log(json.status)
                if (json.status === true) {
                    sessionStorage.setItem('loginupdate', 'success')
                    sessionStorage.setItem('secret', json.secret)
                    sessionStorage.setItem('username', this.state.userid)
                    window.location.reload(1)
                }
            })
            .catch((err) => console.log(err))
    }


    render() {
        if (sessionStorage.getItem('loginupdate') === 'success') {
            return (
                <div>
                    <UpdateProductDetails />
                </div>
            );
        }
        else {
            return (
                <div>
                    <HeaderTemplate />
                    <div class="card"></div>
                    <br /><br /><br /><br />
                    <div class="columns">
                    <div class="column">
                    <div style={{padding: "40px"}}>
                    <img src={gepezet}
                            width="180%"
                            height="180%"
                        />
                    </div>
                    </div>
                    <div class="column color_gray padding" >
                    <br></br>
                        <p class="color_gray">
                        <center><h1>Product Tracking</h1></center>
                        <br /><br />
                            <tab1>
                                A smart portal to update and track products.
                                The authorized person uses this portal to scan 
                                the product ID which updates the product location 
                                details.
                            </tab1>
                        </p>
                    </div> 
                        <div class="column">
                            <div>
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
                                        <div class="control">
                                            <button class="button is-info is-rounded button_hover" onClick={this.handleSubmit}>Submit</button>
                                        </div>
                                    </div>
                                </center>
                                <SpaceBlock />
                                <SpaceBlock />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
