import axios from 'axios'
import React, { useState ,useEffect } from 'react';


export default function Game() {
    const [question, setQuestion] = useState([])
    const [choise, setChoise] = useState([])    
   useEffect(()=>{
    const code = localStorage.getItem('group')
        let repeat;
      async  function getQuestion() {
        await    axios.get('http://localhost:1099/participant/getQuestion/' + code)
                .then(async question => {
                    console.log(question.data.answer);
                    console.log(question.data.false_choices);
                    setQuestion(question.data)
                    const choise = question.data.false_choices
                    const anwser = question.data.answer
                    choise.push(anwser)
                    console.log(choise+"   this is all Question");
                    setChoise(choise)
                    repeat = setTimeout(getQuestion, 4000);
                    repeat = getQuestion
                })
                .catch(err => console.log(err))
        }
        getQuestion()
                if(repeat){
                    clearTimeout(repeat)
                }
    },[])

    async function handelButton(e){
        const anwser = e.target.value;
        console.log(anwser);
        const group = parseInt(localStorage.getItem('group'))
      

        const config ={
            headers:{
                votretoken: localStorage.getItem('token')
            }
        }
        const data = {
            group : group,
            anwser : anwser
        }

        await axios.post('http://localhost:1099/participant/reponse/'+question._id,data,config)
        .then(res=>{console.log(res);
            console.log("reeeeeeeeeeeeee");
            console.log(res.data);
            if(res.data ==="jeu terminé"){
                window.location.assign("http://localhost:3000/winer")
            }
         
        })
        .catch(err=>{console.log(err);})
        
    }
    return (

        <div className="auth-wrapper"> 
        
        <div className="auth-inner">
      
            <div className="alert alert success">{question.quest}</div>
            <button className="btn btn-warning" value={choise[0]} onClick={(event)=>{handelButton(event)}}>{choise[0]}</button>
            <button className="btn btn-warning" value={choise[1]} onClick={(event)=>{handelButton(event)}}>{choise[1]}</button>
            <button className="btn btn-warning" value={choise[2]} onClick={(event)=>{handelButton(event)}}>{choise[2]}</button>
            <button className="btn btn-warning" value={choise[3]} onClick={(event)=>{handelButton(event)}}>{choise[3]}</button>
        </div>
        </div>
    )
}
