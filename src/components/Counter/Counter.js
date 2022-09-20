import React, {useState} from "react";
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {
  CounterContainer,
  IncrementBtn,
  CurrentCount,
  DecrementBtn,
} from "./CounterStyles";

const Counter = () => {
  const [count, setCount] = useState(5);

  const Increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const Decrement = (e) => {
    e.preventDefault();
      if(count > 0) {
        setCount(count - 1);
      }else {
          setCount(0);
          alert("Sorry! Zero limit has reached!")
      }
  };

  return (
    <>
      <CounterContainer>
        <IncrementBtn onClick={Increment}><AiOutlinePlus /></IncrementBtn>
        <CurrentCount>{count}</CurrentCount>
        <DecrementBtn onClick={Decrement}><AiOutlineMinus /></DecrementBtn>
      </CounterContainer>
    </>
  );
};

export default Counter;
