import Questions from "./Questions";
import { useState, useEffect } from "react";
import generateQuestion from "../utils/generateQuestion";
import Keyboard from "./Keyboard";

const Quiz = () => {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();

  useEffect(() => {
    const response = generateQuestion();
    setQuestion(response);
  }, []);

  return (
    <div>
      QUESTIONS
      {question && <Questions question={question} />}
      {question && <Keyboard question={question} setAnswer={setAnswer} />}
    </div>
  );
};

export default Quiz;
