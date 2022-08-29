import { useRef } from "react";

const Keyboard = ({ setAnswer }) => {
  const inputRef = useRef(null);
  const handleClick = () => {
    console.log("calling handleClick");
    console.log(inputRef.current.value);
    setAnswer(inputRef.current.value);
    inputRef.current.value = null;
  };
  return (
    <div>
      <input type="number" ref={inputRef} placeholder="answer" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Keyboard;
