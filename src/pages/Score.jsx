import { useLocation, useNavigate } from "react-router-dom";

function Score(){

 const navigate = useNavigate();
 const location = useLocation();

 const score = location.state?.score || 0;

 let message = "";

 if(score <= 4){
  message = "Pas génial là !";
 }
 else if(score <= 7){
  message = "Ça commence à venir";
 }
 else{
  message = "Bravo !";
 }

 return(

  <div>

   <h1>Page Score</h1>

   <h2>Score : {score} / 10</h2>

   <p>{message}</p>

   <button onClick={()=>navigate("/")}>
    Rejouer
   </button>

  </div>

 )

}

export default Score;