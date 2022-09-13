import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./counterSlice.js";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section className="counter">
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        style={{
          margin: "2rem 0",
          width: "50%",
          fontSize: "1.4rem",
          textAlign: "center",
          padding: "0.5rem 0",
          fontWeight: "bold",
          color: "black",
        }}
      />
      <div>
        <button
          onClick={() => dispatch(incrementByAmount(addValue))}
          className="addAmount"
        >
          add Amount
        </button>
        <button onClick={resetAll}>reset</button>
      </div>
    </section>
  );
};

export default Counter;
