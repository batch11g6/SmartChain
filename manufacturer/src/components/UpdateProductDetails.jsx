import React, { Component } from 'react'
import HeaderTemplate from './HeaderTemplate'
import QrReader from 'react-qr-scanner'
import LocationCords from './LocationCords'

export default class UpdateProductDetails extends Component {
    constructor() {
        super()
        this.state = {
            delay: 2000,
            currentTime: Math.round((new Date()).getTime() / 1000),
            result: '',
        }
        this.handleScan = this.handleScan.bind(this);
    }

    handleScan(res) {
        this.setState({
            result: res,
        })
        const data = {
            scanTime: this.state.currentTime,
            codeValue: this.state.result,
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
                <div class="card"></div>
                <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    facingMode="rear"
                />
                {this.state.result}
                {sessionStorage.getItem('long')}
            </div>
        )
    }
}
