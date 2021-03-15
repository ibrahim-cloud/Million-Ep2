import React, { Component } from "react";
import axios from "axios";


export default class home extends Component {
    handleSubmit=e=>{
        const config ={
            headers:{
                votretoken: localStorage.getItem('token')
            }
        }

        e.preventDefault();
        const data = {
            code:this.code,
        
        }
        axios.post('http://localhost:1099/participant/create',data ,config).then(
            res=> {
                console.log(res)
                // window.location.assign("http://localhost:3000/StartGame")

            }
        ).catch(
            err=>{
                console.log(err);
            }
        )
    }
    render() {
        return (
            <div className="auth-wrapper"> 
        
            <div className="auth-inner">
            <form  onSubmit ={this.handleSubmit}>

            <h3>Creat Group</h3>
          
            <div className="form-group">
                <label>Code Group</label>
                <input type="text" onChange={e=> this.code= e.target.value} className="form-control" placeholder="Enter phone" />
            </div>
            <button onSubmit ={this.handleSubmit} type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                    <a href="./JoinGroup">Join Group</a>
                </p>
        </form>
           </div>
           </div>
        );
    }
}