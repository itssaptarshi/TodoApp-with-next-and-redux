"use client";
import React, { useState } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodo } from "../redux/slices/todoSlice";

const Todo = () => {
  const [inp, setInp] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    console.log(inp);
    dispatch(addTodos(inp));
    setInp("");
  };
  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="enter here"
          className="text-black"
          value={inp}
          onChange={(e) => {
            setInp(e.target.value);
          }}
        />
        <button className="m-3" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div>
        {todos &&
          todos.map((t, index) => (
            <div key={index}>
              <div className="bg-white text-black p-5 rounded-lg flex m-3">
                <div>{t}</div>
                <button
                  className="p-2 bg-slate-400"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Del
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todo;
