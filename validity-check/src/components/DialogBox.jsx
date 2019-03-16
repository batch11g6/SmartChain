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
            <img src={this.props.statusUrl} alt="img not found" style={{ width: "100px", height: "100px" }} />
          </DialogContent>
      </div>
    )
  }
}
