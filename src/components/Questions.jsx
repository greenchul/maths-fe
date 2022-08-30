import "../styles/questions.css";

const Questions = ({ question }) => {
  return (
    <div className="questions-container">
      <p>{question.questionExpression}</p>
    </div>
  );
};

export default Questions;
