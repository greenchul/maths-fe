import { useEffect, useState } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
  }, []);
  return (
    <div>
      <p>Time left: {timeLeft}</p>
    </div>
  );
};

export default Timer;
