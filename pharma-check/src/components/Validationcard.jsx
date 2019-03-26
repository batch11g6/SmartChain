import React, { Component } from 'react'
import MapView from '../components/MapView'
import './components.css'

export default class Validationcard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    //Fetch form blockchain
    render() {
        const dialogColor = this.props.dialogColor;

        return (
            <div>
                <div class="card">
                    <div class="columns">
                        <div class="column">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Smart Chain
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                                    <span class="icon">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </header>
                            <div class="card-content">
                                <div class="content color_gray">
                                    {/*Scanner block*/}
                                    <div>
                                        <img width="40%" src={this.props.statusUrlImage} />
                                        <p style={{ color: dialogColor }}>{this.props.displayMessage}</p>
                                    </div>
                                    <br />
                                    <strong>Product Name: </strong> {this.props.productDetails.productname}<br />
                                    <strong>Ingredients: </strong>{this.props.productDetails.ingredients}<br />
                                    <strong>Manufactured date: </strong>{this.props.productDetails.manufactureddate}<br />
                                    <strong>Expiry date: </strong>{this.props.productDetails.expirydate}<br />
                                    <strong>Price (&#8377;): </strong>{this.props.productDetails.price}<br />
                                    <strong>batch number: </strong>{this.props.productDetails.batchnumber}<br />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
