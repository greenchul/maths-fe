const Keyboard = ({ question, setAnswer }) => {
  const handleClick = () => {
    console.log("calling handleClick");
  };
  return (
    <div>
      <input />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Keyboard;
