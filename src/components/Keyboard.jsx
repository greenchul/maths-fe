import { useRef, useEffect } from "react";

const Keyboard = ({ setAnswer }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log("calling handleClick");
    console.log(inputRef.current.value);
    setAnswer(inputRef.current.value);
    inputRef.current.value = null;
  };

  const handleKeyPress = (e) => {
    console.log(e);
    if (e.keyCode === 13) {
      console.log("you have pressed enter");
      setAnswer(inputRef.current.value);
      inputRef.current.value = null;
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyPress);
    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, []);
  return (
    <div>
      <input type="number" ref={inputRef} placeholder="answer" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Keyboard;
