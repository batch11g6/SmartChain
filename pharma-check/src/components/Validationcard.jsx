import React, { Component } from 'react'
import './components.css'

import { connect } from 'react-redux';
import { fetchProductDetails } from '../actions/fetchDetails'

class Validationcard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    //Fetch form blockchain
    render() {
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
                                        <img width="40%" src={this.props.resultdata.statusUrl} />
                                        <p style={{ color: this.props.resultdata.dialogColor }}>{this.props.resultdata.displayMessage}</p>
                                    </div>
                                    <br />
                                    <strong>Product Name: </strong> {this.props.resultdata.productname}<br />
                                    <strong>Ingredients: </strong>{this.props.resultdata.ingredients}<br />
                                    <strong>Manufactured date: </strong>{this.props.resultdata.manufactureddate}<br />
                                    <strong>Expiry date: </strong>{this.props.resultdata.expirydate}<br />
                                    <strong>Price (&#8377;): </strong>{this.props.resultdata.price}<br />
                                    <strong>batch number: </strong>{this.props.resultdata.batchnumber}<br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    resultdata: state.resultdata.detail
})

export default connect(mapStateToProps, { fetchProductDetails })(Validationcard)