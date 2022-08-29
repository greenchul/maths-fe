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

const aDivideValue = () => {
  const aValues = [2, 4, 6, 8, 10];
  const aIndex = Math.floor(Math.random() * 5);
  console.log(aIndex);
  return aValues[aIndex];
};

const generateQuestion = () => {
  const question = {};
  const operatorIndex = Math.floor(Math.random() * 4);
  let a;
  let b;
  if (operatorIndex === 3) {
    b = 2;
    a = aDivideValue();
  } else {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
  }

  const operators = ["+", "-", "*", "/"];
  const questionExpression = `${a} ${operators[operatorIndex]} ${b}`;

  question.questionExpression = questionExpression;
  question.answer = generateAnswer(a, b, operatorIndex);
  return question;
};

export default generateQuestion;
