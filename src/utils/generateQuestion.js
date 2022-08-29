const generateAnswer = (a, b, operatorIndex) => {
  if (operatorIndex === 0) {
    return a + b;
  }
  if (operatorIndex === 1) {
    return a - b;
  }
  if (operatorIndex === 2) {
    return a * b;
  }
  if (operatorIndex === 3) {
    return a / b;
  }
};

const generateQuestion = () => {
  const question = {};
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const operatorIndex = Math.floor(Math.random() * 4);
  const operators = ["+", "-", "*", "/"];
  const questionExpression = `${a} ${operators[operatorIndex]} ${b}`;

  question.questionExpression = questionExpression;
  question.answer = generateAnswer(a, b, operatorIndex);
  return question;
};

export default generateQuestion;
