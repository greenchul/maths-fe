import Questions from "./Questions";
import { useState, useEffect } from "react";
import generateQuestion from "../utils/generateQuestion";
import Keyboard from "./Keyboard";

const Quiz = () => {
  const [question, setQuestion] = useState();

  useEffect(() => {
    const response = generateQuestion();
    setQuestion(response);
  }, []);
  return (
    <div>
      QUESTIONS
      {question && <Questions question={question} />}
      {question && <Keyboard question={question} />}
    </div>
  );
};

export default Quiz;
