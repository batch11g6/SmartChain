import React, { Component } from 'react'
import HeaderTemplate from '../components/HeaderTemplate'
import { Map, Marker, Popup, TileLayer, Polyline } from 'react-leaflet'
import { antPath } from 'leaflet-ant-path';
import AntPath from "react-leaflet-ant-path";
import Constants from '../Constants'
import './pageviews.css'

var lat_longs = []
var dummy=[[19.0760, 72.8777], [17.3850, 78.4867], [12.9716, 77.5946]]


export default class ViewProducts extends Component {
    constructor() {
        super();
        this.state = {
            width: 500,
            tag: [],
            packageID: '',
            loactioncords:[],
            AntPathTag:'',
        }
        this.handlePackageIDChange = this.handlePackageIDChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handlePackageIDChange(event) {
        this.setState({ packageID: event.target.value })
    }

    handleSubmit() {
        const { DOMAIN_URL, TRACK_PRODUCT } = Constants
        const lat_long = {}
        const data = {
            pkg_id: this.state.packageID
        }
        console.log(data)
        fetch(DOMAIN_URL + TRACK_PRODUCT, {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                "Accept": 'application/json',
         }
        })
            .then((data) => data.json())
            .then((result) => {
                console.log(result.product_update)
                result.product_update.map((element, item) => {
                    var cords = [parseFloat(element.lat), parseFloat(element.long)]
                    this.state.loactioncords.push(cords)
            
                    var date = Date(parseFloat(element.timestamp))

                    this.setState({
                        tag: this.state.tag.concat(<Marker position={cords}>
                            <Popup><p style={{ color: "#00F0FF" }}>{item}</p>{date}</Popup>
                        </Marker>)
                    })
                })
                this.setState({AntPathTag:<AntPath positions={this.state.loactioncords} />})
            })
            .catch((err) => console.log(err))
    }

    render() {
        const position = [sessionStorage.getItem('lat'), sessionStorage.getItem('long')]
        const path = antPath(lat_longs, {
            "delay": 400,
            "dashArray": [
                10,
                20
            ],
            "weight": 5,
            "color": "#0000FF",
            "pulseColor": "#FFFFFF",
            "paused": false,
            "reverse": false,
            "hardwareAccelerated": true
        });
        if (sessionStorage.getItem('login') === 'success') {
            return (
                <div>
                    <HeaderTemplate />
                    <div class="card"></div>
                    <br/>
                    <div >
                        <center>
                            <div class="field">
                                <div class="control" style={{margin: "15px"}} >
                                    <input style={{width:"70%"}} class="input is-info " type="text" placeholder="Package ID" value={this.state.packageID} onChange={this.handlePackageIDChange} />
                                    &nbsp;&nbsp;&nbsp;
                                    <button class="button is-info is-rounded button_hover" onClick={this.handleSubmit}>Submit</button>
                            
                                </div>
                            </div>
                            <br />
                        </center>
                    </div>
                    <div>
                        <div class=" leaflet-container scale_image">
                            <Map
                                center={position}
                                zoom={5}
                                attributionControl={true}
                                zoomControl={true}
                                doubleClickZoom={true}
                                scrollWheelZoom={true}
                                dragging={true}
                                animate={true}
                                easeLinearity={0.35}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                                />

                                {this.state.tag}
                               {/** The Antpath should mount after fetch so the tag is stored in state then
                                rendered 
                            */}
                                {this.state.AntPathTag}
                            </Map>
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
                    <br /><br /><br />
                    <center> <a href="/home"><h1>Please Login</h1></a></center>
                </div>
            )
        }
    }
}
