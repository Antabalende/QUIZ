import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Score(){

 const navigate = useNavigate();
 const location = useLocation();

 const score = location.state?.score || 0;

 const [name,setName] = useState("");
 const [bestScores,setBestScores] = useState([]);

 useEffect(()=>{

  const storedScores = JSON.parse(localStorage.getItem("scores")) || [];

  setBestScores(storedScores);

 },[]);

 function saveScore(){

  let scores = JSON.parse(localStorage.getItem("scores")) || [];

  const newEntry = {
   name: name || "Player",
   score: score
  };

  scores.push(newEntry);

  scores.sort((a,b)=> b.score - a.score);

  scores = scores.slice(0,10);

  localStorage.setItem("scores", JSON.stringify(scores));

  setBestScores(scores);

 }

 let message="";

 if(score<=4){
  message="Pas génial là !";
 }
 else if(score<=7){
  message="Ça commence à venir";
 }
 else{
  message="Bravo !";
 }

 return(

  <div>

   <h1>Page Score</h1>

   <h2>Score : {score} / 10</h2>

   <p>{message}</p>

   <h3>Entrer votre pseudo</h3>

   <input
    type="text"
    placeholder="Votre nom"
    value={name}
    onChange={(e)=>setName(e.target.value)}
   />

   <button onClick={saveScore}>
    Enregistrer score
   </button>

   <h2>Top 10 Scores</h2>

   <ol>
    {bestScores.map((s,i)=>(
     <li key={i}>
      {s.name} - {s.score} / 10
     </li>
    ))}
   </ol>

   <button onClick={()=>navigate("/")}>
    Rejouer
   </button>

  </div>

 )

}

export default Score;