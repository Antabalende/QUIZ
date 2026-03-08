import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home(){

 const navigate = useNavigate();

 const [category,setCategory] = useState("");
 const [difficulty,setDifficulty] = useState("");

 function startQuiz(){

  navigate(`/quiz?category=${category}&difficulty=${difficulty}`);

 }

 return(

  <div>

   <h1>Quiz OpenTDB</h1>

   <h3>Choisir une catégorie</h3>

   <select onChange={(e)=>setCategory(e.target.value)}>

    <option value="">-- Choisir --</option>
    <option value="9">General Knowledge</option>
    <option value="21">Sports</option>
    <option value="23">History</option>
    <option value="27">Animals</option>

   </select>

   <h3>Difficulté</h3>

   <select onChange={(e)=>setDifficulty(e.target.value)}>

    <option value="">-- Choisir --</option>
    <option value="easy">Easy</option>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>

   </select>

   <br/><br/>

   <button
    disabled={!category || !difficulty}
    onClick={startQuiz}
   >
    Démarrer
   </button>

  </div>

 )

}

export default Home