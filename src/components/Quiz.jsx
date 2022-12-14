import Questions from "./Questions";
import { useState, useEffect } from "react";
import generateQuestion from "../utils/generateQuestion";
import Keyboard from "./Keyboard";
import checkAnswer from "../utils/checkAnswer";
import "../styles/quiz.css";

const Quiz = () => {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const response = generateQuestion();
    setQuestion(response);
  }, [score]);

  useEffect(() => {
    if (question) {
      console.log("New answer submitted", answer);
      console.log("answer is", checkAnswer(question.answer, Number(answer)));
      if (checkAnswer(question.answer, Number(answer))) {
        setScore((prev) => prev + 1);
      }
    }
  }, [answer, question]);

  return (
    <div className="quiz-container">
      <div className="quiz-score-time-container">
        <p className="quiz-score">Score: {score}</p>
        <p className="quiz-time">Time:</p>
      </div>
      {question && <Questions question={question} />}
      <Keyboard setAnswer={setAnswer} />
    </div>
  );
};

export default Quiz;
