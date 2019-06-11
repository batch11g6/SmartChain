import React, { Component } from 'react'
import HeaderTemplate from './HeaderTemplate'
import QrReader from 'react-qr-scanner'
import LocationCords from './LocationCords'
import Constants from '../Constants'


export default class UpdateProductDetails extends Component {
    constructor() {
        super()
        this.state = {
            delay: 2000,
            currentTime: Math.round((new Date()).getTime() / 1000),
            result: '',
            successcard: '',
        }
        this.handleScan = this.handleScan.bind(this);
    }

    handleScan(res) {
        this.setState({
            result: res,
        })
        const { DOMAIN_URL, UPDATE_PRODUCT } = Constants
        const data = {
            ts: this.state.currentTime,
            pkg_id: this.state.result,
            longi: sessionStorage.getItem('long'),
            lati: sessionStorage.getItem('lat')
        }
        if (this.state.result !== null) {
            console.log(data)
            fetch(DOMAIN_URL + UPDATE_PRODUCT, {
                method: 'POST',
                body: JSON.stringify(data),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": 'application/json',
                }
            })
                .then((data) => data.json())
                .then((res) => {
                    console.log(res)
                    if (res.status === 'success') {
                        const successcard = <div class="card" style={{ background: "#008000", width: "100%" }}>
                            <center>
                                <p style={{ color: "#FFFFFF" }}>Success</p>
                            </center>
                        </div>
                        this.setState({ successcard: successcard })
                    }
                })
                .catch((err) => console.log(err))
        }
        else {
            console.log('Waiting')
            this.setState({ successcard: '' })
        }

    }

    render() {
        const previewStyle = {
            height: 400,
            width: 340,
        }
        return (
            <div>
                <LocationCords />
                <HeaderTemplate />
                {this.state.successcard}
                <div class="card"></div>
                <div class="columns">
                    <div class="card">
                        <QrReader
                            delay={this.state.delay}
                            style={previewStyle}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            facingMode="rear"
                        />
                    </div>
                   
                </div>
                Package ID: {this.state.result}
            </div>
        )
    }
}
