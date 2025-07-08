import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0); //default val
  //[variable, function]
  //useState changes the value from all places in ui -> reacts power

  const addValue = () => {
    console.log(counter);
    // counter += 1;
    // setCounter(counter);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  };
  const removeValue = () => {
    console.log(counter);
    counter -= 1;
    setCounter(counter);
    counter -= 1;
    setCounter(counter);
    counter -= 1;
    setCounter(counter);
    counter -= 1;
    setCounter(counter);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>add</button>
      <button onClick={removeValue}>remove</button>
      {/* <i> {counter} </i> */}
    </>
  );
}
export default App;
