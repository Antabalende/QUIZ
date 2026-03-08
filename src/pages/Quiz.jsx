import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function Quiz() {

  const [params] = useSearchParams();
  const navigate = useNavigate();

  const category = params.get("category");
  const difficulty = params.get("difficulty");

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {

    fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          setQuestions(data.results);
        }
      })
      .catch(err => console.error(err));

  }, [category, difficulty]);

  if (questions.length === 0) {
    return <h2>Chargement du quiz...</h2>;
  }

  const question = questions[current];

  if (!question) {
    return <h2>Erreur chargement question</h2>;
  }

  const answers = [...question.incorrect_answers, question.correct_answer];

  function handleAnswer(answer) {

    let newScore = score;

    if (answer === question.correct_answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      navigate("/score", { state: { score: newScore } });
    }
  }

  return (
    <div>

      <h2>Question {current + 1} / 10</h2>

      <h3 dangerouslySetInnerHTML={{ __html: question.question }} />

      {answers.map((a, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(a)}
          style={{ display: "block", margin: "10px 0" }}
          dangerouslySetInnerHTML={{ __html: a }}
        />
      ))}

    </div>
  );
}

export default Quiz;