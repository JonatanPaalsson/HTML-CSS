import { useEffect, useState } from "react";
import { Button } from "../Buttons";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [lastValue, setLastValue] = useState(0);
  const [threeInARow, setThreeInARow] = useState(0);

  useEffect(() => {
    if (count > lastValue) {
      setThreeInARow((t) => t + 1);
    } else {
      setThreeInARow(0);
    }
    setLastValue(count);
  }, [count]);

  const decreseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>Your count is: {count}</p>

      <Button text="-" callback={decreseCount}></Button>
      <Button
        text="+"
        callback={() => {
          setCount(count + 1);
        }}
      ></Button>
      {threeInARow > 2 && <p>Yay!</p>}
    </div>
  );
};

export default Counter;
