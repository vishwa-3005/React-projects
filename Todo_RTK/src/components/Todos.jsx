import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEditing = (todo) => {
    setEditingTodoId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = () => {
    dispatch(updateTodo({ id: editingTodoId, newText: editText }));
    setEditingTodoId(null);
    setEditText("");
  };

  return (
    <>
      <div className="text-white text-lg font-bold mt-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editingTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="text-black px-2 py-1 rounded"
                />
                <button
                  onClick={handleUpdate}
                  className="text-white bg-green-500 py-1 px-3 rounded ml-2"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>
                <div className="space-x-2">
                  <button
                    onClick={() => startEditing(todo)}
                    className="text-white bg-yellow-500 py-1 px-3 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 py-1 px-3 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
