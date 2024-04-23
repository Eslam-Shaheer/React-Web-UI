import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseByAmount,
  increment,
} from "../../store/slices/counterSlice";

const CounterComponent = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrement = () => {
    dispatch(increment());
  };
  //   const handleIncreaseByValue = () => {
  //     dispatch(increaseByAmount(10));
  //   };

  return (
    <div className="d-flex gap-2 p-2">
      <Button onClick={handleDecrement}>Decrement</Button>
      <div className="p-2">{counter}</div>
      <Button onClick={handleIncrement}>Increment</Button>
      {/* <Button onClick={handleIncreaseByValue}>handleIncreaseByValue</Button> */}
    </div>
  );
};

export default CounterComponent;
