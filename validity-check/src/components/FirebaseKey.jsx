import React, { Component } from 'react'
import FirebaseConfig from '../FirebaseConfig'
var firebase =require('firebase')

var config={
    apiKey: FirebaseConfig.apiKey,
    authDomain: FirebaseConfig.authDomain,
    databaseURL: FirebaseConfig.databaseURL,
    projectId: FirebaseConfig.projectId,
    storageBucket: FirebaseConfig.storageBucket,
    messagingSenderId: FirebaseConfig.messagingSenderId
}

firebase.initializeApp(config);

var ref = firebase.database().ref();

export default class FirebaseKey extends Component {
    
  render() {
    ref.on("value", function(snapshot) {
        console.log(snapshot.val());
     }, function (error) {
        console.log("Error: " + error.code);
     });
     
    return (
      <div>
        
      </div>
    )
  }
}
