import React, { Component } from "react";



export default class choixGAdmin extends Component {
   
    render() {
        return (
            <div className="auth-wrapper"> 
        
            <div className="auth-inner">
            <div class="flex-container">
            <div> <a href="./AddQuestion">Ajouter questions</a>   </div>
            <div>  <a href="./AddAdmin" >ajouter admin </a></div>
            <div>  <a href="./validationUser" >validation participant</a></div>
          
          </div>
           </div>
           </div>
        );
    }
}