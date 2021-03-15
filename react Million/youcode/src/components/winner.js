import React, { useState ,useEffect } from 'react';
import axios from 'axios'
export default function Winer() {
    
    const [winner,setWinner] = useState({})
    useEffect(() => {
        const group = localStorage.getItem('group')
      axios.get('http://localhost:1099/participant/getwinner/'+group)
        .then(responce=>{
            console.log(responce.data)
            const winner =responce.data
            if (responce) {
                axios.get('http://localhost:1099/participant/find/'+winner)
                
                .then(res=>{
 setWinner({
                full_name:res.data.full_name,
                
            })
            

                })

                
            }
           else{
                console.log('makinch had khona')
            }
        })
        .catch(err=>{console.log(err)})
        // return () => {
        //     // cleanup
        // }
    },[])
    return (
        <div className="auth-wrapper"> 
        
        <div className="auth-inner">
            {winner && <div>the winner is : {winner.full_name}
                </div>}
        </div>
        </div>
    )
}