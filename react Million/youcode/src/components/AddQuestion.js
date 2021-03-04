import React, { Component } from "react";
import axios from "axios";



export default class AddQuestion extends Component {
    handleSubmit=e=>{
        e.preventDefault();

        const config ={
            headers:{
                votretoken: localStorage.getItem('token')
            }
        }
        const data = {
            quest:this.quest,
            answer:this.answer,
            false_choices:this.false_choices.split(','),
            points:this.points
            
        }
        axios.post('http://localhost:1099/admin/addquestion',data,config).then(
            res=> {
                console.log(res)
               
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )
        console.log(data)
    }
    render() {
        
        return (
            <div className="auth-wrapper"> 
        
            <div className="auth-inner">
            <form onSubmit ={this.handleSubmit}>
                <h3>Ajouter Questions</h3>

                <div className="form-group">
                    <label>quest</label>
                    <input type="text" className="form-control" placeholder="quest" onChange={e=> this.quest= e.target.value} />
                </div>

                <div className="form-group">
                    <label>answer</label>
                    <input type="text" className="form-control" placeholder="answer" onChange={e=> this.answer= e.target.value} />
                </div>

                <div className="form-group">
                    <label> false_choices</label>
                    <input type="text" className="form-control" placeholder=" false_choices" onChange={e=> this.false_choices= e.target.value}/>
                </div>

                <div className="form-group">
                    <label>points</label>
                    <input type="number" className="form-control" placeholder="Enter password" onChange={e=> this.points= e.target.value} />
                </div>

                <button onSubmit ={this.handleSubmit} type="submit" className="btn btn-primary btn-block">Ajouter Questions</button>
                <p className="forgot-password text-right">
                     <a href="./choixGadmin">return</a>
                </p>
            </form></div>
            </div>
        );
    }
}