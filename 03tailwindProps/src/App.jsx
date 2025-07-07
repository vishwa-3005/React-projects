import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./component/Card";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-gray-400 mb-4 rounded-xl p-4 ">tailwind props</h1>
      <Card username="manish" btnText="click me" />
      <Card username="vishwadeep" />
    </>
  );
}

export default App;
