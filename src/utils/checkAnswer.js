const checkAnswer = (expectedAnswer, answer) => {
  if (expectedAnswer === answer) {
    return true;
  } else {
    return false;
  }
};

export default checkAnswer;
