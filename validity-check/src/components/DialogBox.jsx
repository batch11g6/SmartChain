import React, { Component } from 'react'
import { DialogContent} from 'react-mdl';

export default class DialogBox extends Component {
    constructor(props){
        super(props);
    }
    

  render() {
     
    return (
      <div>
        <DialogContent>
            <p style={{ color: this.props.dialogColor }}>{this.props.displayMessage}</p>
            <img src={this.props.statusUrl} alt="img not found" style={{ width: "100px", height: "100px" }} /><br/>
            <strong>Product Name: </strong><br/>
            <strong>Ingredients: </strong><br/>
            <strong>Manufactured date: </strong><br/>
            <strong>Expiry date: </strong><br/>
            <strong>Price (&#8377;): </strong><br/>
            <strong>Date of product validity: </strong><br/>
            <strong>batch number: </strong><br/>

          </DialogContent>
      </div>
    )
  }
}
