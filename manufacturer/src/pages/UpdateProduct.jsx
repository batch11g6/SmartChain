import React, { Component } from 'react'
import SpaceBlock from '../components/SpaceBlock'
import HeaderTemplate from '../components/HeaderTemplate'
import Constants from '../Constants'
import UpdateProductDetails from '../components/UpdateProductDetails'

export default class UpdateProduct extends Component {
    constructor(){
        super();
        this.state={
            userid:'',
            password:''
        }

        this.handleuserIDChange= this.handleuserIDChange.bind(this)
        this.handlePasswordChange= this.handlePasswordChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    handleuserIDChange(event){
        this.setState({userid:event.target.value})
    }

    handlePasswordChange(event){
        this.setState({password:event.target.value})
    }

    handleSubmit(){
        const { DOMAIN_URL, PASSWORD_CHECK } = Constants;
        var pwd=this.state.password
        var user=this.state.userid
        var data={'user':user ,'password':pwd}
        fetch(DOMAIN_URL+PASSWORD_CHECK,{
            method:'POST',
            body:JSON.stringify(data)
        })
        .then((data)=>data.json())
        .then((json)=>{
            console.log(json.status)
            if(json.status===true){
                sessionStorage.setItem('loginupdate','success')
                window.location.reload(1)
                sessionStorage.setItem('secret',json.secret)
            }
        })
        .catch((err)=>console.log(err))
    }


  render() {
    if(sessionStorage.getItem('loginupdate')==='success'){
        return(
            <div>
                <UpdateProductDetails />
            </div>
        );
    }
    else{
        return (
            <div>
              <HeaderTemplate />
              <div class="card"></div>
              <div>
              <div class="card">
                  <SpaceBlock />
                  <center>
                  <div style={{width:'50%'}}>
                  <div class="field">
                      <div class="control">
                          <input class="input is-info" type="text" placeholder="Manufacturer ID" onChange={this.handleuserIDChange}/>
                      </div>
                  </div>
                  <div class="field">
                      <div class="control">
                          <input class="input is-info" type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                      </div>
                  </div>
                  <div class="control">
                      <button class="button is-info is-rounded" onClick={this.handleSubmit}>Submit</button>
                  </div>
                  </div>
                  </center>
                  <SpaceBlock />
                  <SpaceBlock />
                  </div>
              </div>
            </div>
          )
    }
  }
}
