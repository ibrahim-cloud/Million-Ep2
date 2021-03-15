// import React, { Component } from "react";
// import axios from "axios";



// export default class StartGame extends Component {
//   constructor(props) {
//             super(props)
    
//             this.state = {
//           Users: [],
//           errorMsg: ''
//             }
//         }
//     handleSubmit =e=>{
      
//         e.preventDefault();
//         const config ={
//                     headers:{
//                         votretoken: localStorage.getItem('token')
//                     }
//                 }
//                  console.log('is work')
//                 const data = {
//                     group:"20202020",
//                     anwser:"prison"
//                 }
//         axios.post('http://localhost:1099/participant/reponse/6036d663f793c837743b1f58',data,config).then(
//             res=> {
//                 console.log(res.data)
//                 this.setState({ Users: res.data })
               
//             }
//         ).catch(
//             err=>{
//                 console.log(err);
//             }
//         )
//     }
//     render() {
//         const { Users, errorMsg } = this.state;

//         return (
//             <div className="auth-wrapper"> 
        
//             <div className="auth-inner1">
//             <button onClick ={this.handleSubmit} type="submit" className="btn btn-primary btn-block">Sign Up</button>
//             {Users.length ?




// Users.map(User => 

        
//         <h1 >{User}</h1> 
    

    
    
//     )
// : null}
// {errorMsg ? <div>{errorMsg}</div> : null}
 
//              </div>
//              </div>
//         );
//     }
// }