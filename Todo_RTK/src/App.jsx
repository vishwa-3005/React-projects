import { useState } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo.jsx";
import Todos from "./components/Todos.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>React about redux toolkit</h1>

        <AddTodo />
        <Todos />
      </Provider>
    </>
  );
}

export default App;
