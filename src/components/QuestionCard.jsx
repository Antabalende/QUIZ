import { decodeHtmlEntities } from "../utils/decodeHtml";

function QuestionCard({question, answers, onAnswer}) {

 return (

  <div>

   <h2>{decodeHtmlEntities(question)}</h2>

   {answers.map((a,i)=>(

    <button
     key={i}
     onClick={()=>onAnswer(a)}
    >
     {decodeHtmlEntities(a)}
    </button>

   ))}

  </div>

 );

}

export default QuestionCard;