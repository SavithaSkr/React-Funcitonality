import { useState } from "react";
function Counter() {
  var [count, setCount] = useState(0);
  function increment() {
    setCount(count++);
  }
  function decrement() {
    setCount(count--);
  }
  //random numbre gereration
  var [rannumber, rancount] = useState(0);
  function randomnumber() {
    rancount(Math.floor(Math.random() * 10));
  }
  return (
    <div>
      <h3>Increment and Decrement the Number</h3>
      <h2>{count}</h2>
      <button onClick={decrement}>Decrement</button>
      {"\t"}
      {"\t"} {"\t"}
      {/* THIS GIVES SPACE */}
      <button onClick={increment}>Increment</button>
      <br></br>
      <hr></hr>
      <h3>Click the Button to Generate Random Number</h3>
      <h2>{rannumber}</h2>
      <button onClick={randomnumber}>Click Me To Generate Random Number</button>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
    </div>
  );
}
export default Counter;
