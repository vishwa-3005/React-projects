import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Chai from "./chai.jsx";

// createRoot(document.getElementById("root")).render(
//   <>
//     <App />
//     <Chai />
//   </>
// );

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

//createRoot(document.getElementById("root")).render(ReactElement); //NOT OK -> syntax is predefined hai so allow nhi krega

// function myApp() {
//  const username = "vishwadeep"
//   return (
//     <div>
//       <h1>Custom App | chai by {username}</h1> // {username} is evaluated expression
//     </div>
//   );
// }
//  createRoot(document.getElementById("root")).render(myApp());
//this is ok -> retunr hum function hi toh kr rahe the

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit google
//   </a>
// ); //this is jsx syntax
// createRoot(document.getElementById("root")).render(anotherElement);

const anotherUser = "hitesh sir";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  `click here to visit google, ${anotherUser}`
);

createRoot(document.getElementById("root")).render(reactElement);

// {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//     children: "click here to visit google, hitesh sir"
//   }
// }
