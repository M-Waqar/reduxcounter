import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementAction, decrementAction } from "./Actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({
      type: incrementAction,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: decrementAction,
    });
  };
  return (
    <div className="container">
      <h1>Counter App</h1>
      <h4>Count : {count}</h4>
      <button onClick={handleIncrement} className="btn btn-primary btn-sm mr-2">
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-primary btn-sm mr-2">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
