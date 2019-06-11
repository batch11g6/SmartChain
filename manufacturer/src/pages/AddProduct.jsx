import React, { Component } from 'react'
import SpaceBlock from '../components/SpaceBlock'
import '../components/components.css';
import DatePicker from 'react-date-picker';
import Constants from '../Constants'
import LoadingAnimation from '../components/LoadingAnimation'
import HeaderTemplate from '../components/HeaderTemplate'



export default class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
            dateexp: new Date(),
            productname: '',
            ingredients: '',
            price: '',
            batchno: '',
            productTransactionID: '',
            type: 'danger',
            wait: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeexp = this.handleChangeexp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleIngredientsChange = this.handleIngredientsChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleBatchNoChange = this.handleBatchNoChange.bind(this)
        this.handleClear = this.handleClear.bind(this);
    }

    handleChange(date) {
        this.setState({
            date: date
        });
    }

    handleChangeexp(date1) {
        this.setState({
            dateexp: date1
        });
    }
    handleNameChange(e) {
        this.setState({ productname: e.target.value })
    }

    handleIngredientsChange(e) {
        this.setState({ ingredients: e.target.value })
    }
    handlePriceChange(e) {
        this.setState({ price: e.target.value })
    }
    handleBatchNoChange(e) {
        this.setState({ batchno: e.target.value })
    }
    handleSubmit() {
        const { DOMAIN_URL, ADD_PRODUCT } = Constants
        const months = {
            'Jan': 1, 'Feb': 2, 'Mar': 3,
            'Apr': 4, 'May': 5, 'Jun': 6,
            'Jul': 7, 'Aug': 8, 'Sep': 9,
            'Oct': 10, 'Nov': 11, 'Dec': 12
        }
        var data = {
            'productname': this.state.productname,
            'ingredients': this.state.ingredients,
            'manufactureddate': this.state.date.toString().split(' ')[2] + '-' +
                months[this.state.date.toString().split(' ')[1]] + '-' +
                this.state.date.toString().split(' ')[3],
            'expirydate': this.state.dateexp.toString().split(' ')[2] + '-' +
                months[this.state.dateexp.toString().split(' ')[1]] + '-' +
                this.state.dateexp.toString().split(' ')[3],
            'price': this.state.price,
            'batchnumber': this.state.batchno
        }
        var secret = sessionStorage.getItem('secret')

        console.log(data)
        this.setState({ wait: true })
        fetch(DOMAIN_URL + ADD_PRODUCT, {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            }
        }).then((data) => data.json())
            .then((json) => {
                console.log(json)
                setTimeout('', 5000);
                this.setState({ wait: false })
                if (json.hash.length === 64) {
                    this.setState({ productTransactionID: json.hash, type: 'success', wait: false })
                }
            })
            .catch((err) => console.log(err))
    }
    handleClear() {
        this.setState({
            date: new Date(),
            dateexp: new Date(),
            productname: '',
            ingredients: '',
            price: '',
            batchno: '',
            productTransactionID: '',
        })
    }

    render() {

        if (this.state.wait === true && sessionStorage.getItem('login') === 'success') {
            return (
                <div>
                    <HeaderTemplate />
                    <LoadingAnimation />
                </div>
            );
        }
        else if (sessionStorage.getItem('login') === 'success') {
            return (
                <div>
                    <HeaderTemplate />
                    <div class="card"></div>
                    <br></br>
                    <center><h1 class="color_gray">Enter the Product details</h1></center>
                    <div class="columns">
                        <div class="column">
                            <div class="scale_image">
                                <img src="https://cdn.dribbble.com/users/869641/screenshots/4528277/pcori_animation_revised-copy.gif"
                                    height="200%"
                                />
                                {this.state.productTransactionID}
                            </div>
                        </div>

                        <div class="column">
                            <div class="input_width padding">
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-info" type="text" placeholder="Product name"
                                            value={this.state.productname} onChange={this.handleNameChange}
                                        />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-info" type="text" placeholder="Ingredients"
                                            value={this.state.ingredients} onChange={this.handleIngredientsChange}
                                        />
                                    </div>
                                </div>
                                <br />
                                Manufactured date
                                <br />
                                <DatePicker
                                    onChange={this.handleChange}
                                    value={this.state.date}
                                />
                                <br /> <br /> <br />
                                Expiry Date <br />
                                <DatePicker
                                    onChange={this.handleChangeexp}
                                    value={this.state.dateexp}
                                />
                                <br /><br />
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-info" type="text" placeholder="Price (₹)"
                                            value={this.state.price} onChange={this.handlePriceChange}
                                        />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-info" type="text" placeholder="Batch No"
                                            value={this.state.batchno} onChange={this.handleBatchNoChange}
                                        />
                                    </div>
                                </div>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a class="button is-info is-rounded button_hover" onClick={this.handleSubmit}>Add Product</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a class="button is-info is-rounded button_hover" onClick={this.handleClear}>Clear Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <HeaderTemplate />
                    <div class="card"></div>
                    <br></br>
                    <br></br>
                    <center> <a href="/home"><h1>Please Login</h1></a></center>
                </div>
            )
        }
    }
}
