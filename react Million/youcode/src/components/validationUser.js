import React, { Component } from "react";
import axios from "axios";



export default class ValidUser extends Component {
   
    constructor(props) {
		super(props)

		this.state = {
      posts: [],
      errorMsg: ''
		}
	}
    handleSubmit(id){
        console.log('nice khdma me3alm'+id)
    }

	componentDidMount() {
        axios.get("http://localhost:1099/admin/user")
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

        
  
     
    // handleSubmit=e=>{
   
        
    //     // const data = {
    //     //   is_valid:this.is_valid
       
     
    //   console.log('ffffff')
   
    //     // }
    //     var row="";
    //     axios.get("http://localhost:1099/admin/user").then(
    //         res=> {  
    //             for (let i = 0; i < res.data.length; i++) {
    //                 if(!res.data[i].is_valid){
                      
                  
                     
                    
    //                 document.getElementById("List").innerHTML += "<a onclik="console.log('HAHhHAhAHahH')
    //                           ">cccc </a>";}else{
    //                 }
    //             }
    //             console.log(res.data )
    //             // window.location.assign("http://localhost:3000/sign-in")
               
    //         }
    //     ).catch(
    //         err=>{
    //             console.log(err);
    //         }
    //     )

   
    
    // }
   
   
    render() {
         const { posts, errorMsg } = this.state;
         function update(id) {
            const config ={
                headers:{
                    votretoken: localStorage.getItem('token')
                }
            }
             const data = {
                is_valid:true
             }

            axios.put("http://localhost:1099/admin/valid/"+id,data,config)
            .then(
                res=> {
                    console.log(res)
                   
                }
            ).catch(
                err=>{
                    console.log(err);
                }
            )
           
            
        }
        return (

           
		
		// 	<div>
		// 		List of posts
		// 		{posts.length
		// 			? posts.map(post => <div key={post._id}>{post.full_name}</div>)
        //   : null}
        // {errorMsg ? <div>{errorMsg}</div> : null}
		// 	</div>
		// );
            <div className="auth-wrapper"> 
        
            <div className="auth-inner1">
            <div id="layoutSidenav_content"> 
            <main>
                <div className="container-fluid">
                   
                    <div className="card mb-4">
                       
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">
                          
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                 
                                <table  className="table table-bordered" id="doctors" width="100%" >
                                <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Handle</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody id="List">

{posts.length ?




posts.map(post =>  <tr key={post._id}>

        
        <td>{post.full_name}</td> 
        <td>{post.email}</td>
        <td>{post.age}</td>
        <td>{post.phone}</td>
        <td>{post.online}</td>
        <td><button onClick ={ ()=> update(post._id)} type="submit" className="btn btn-primary btn-block">Valid participant</button>
</td>
    
    
     </tr> )
: null}
{errorMsg ? <div>{errorMsg}</div> : null}

   </tbody>
                                 </table>
                             </div>
                         </div>
                     </div>
                 </div>
                
                 <button onClick ={this.handleClick } type="submit" className="btn btn-primary btn-block">Sign Up</button>

             </div>
             </main>
             </div>
             </div>
             </div>
        );
    }
}