import React, { Component } from "react";
import axios from "axios";


export default class JoinGroup extends Component {
    handleSubmit=e=>{
        const config ={
            headers:{
                votretoken: localStorage.getItem('token')
            }
        }

        e.preventDefault();
        console.log('fzzzzz')
        const data = {
            code:this.code,
        
        }
        axios.post('http://localhost:1099/participant/join/',data ,config).then(
            res=> {
                console.log(res.data)
                localStorage.setItem('group',res.data);
                window.location.assign("http://localhost:3000/game")


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

            <h3>Join Group</h3>
          
            <div className="form-group">
                <label>Code Group</label>
                <input type="text" onChange={e=> this.code= e.target.value} className="form-control" placeholder="Enter phone" />
            </div>
            <button onSubmit ={this.handleSubmit} type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                    <a href="./create">Create Group</a>
                </p>
        </form>
        </div>
        </div>
           
        );
    }
}