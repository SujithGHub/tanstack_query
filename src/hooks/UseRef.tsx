import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue; //No re-render because of updating value in use-ref
  }, [inputValue]);

  return (
    <>
      <input
        className='border-2 border-red-400 h-14 focus:outline-none rounded-md px-5'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

export default UseRef