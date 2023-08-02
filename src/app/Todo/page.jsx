"use client";
import React, { useEffect, useState } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodo } from "../redux/slices/todoSlice";

const Todo = () => {
  const [inp, setInp] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodos(inp));
    setInp("");
  };
  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  // const handleChange = (e) => {
  //   setInp(e.target.value);
  // };

  // const handleKeyDown = () => {
  //   if (e.key === 'Enter') {
  //     console.log('do validate'); 
  //   }
  // };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <input
          type="input"
          placeholder="enter here"
          className="text-black"
          // onKeyDown={handleKeyDown}
          value={inp}
          onChange={(e) => {
            setInp(e.target.value)
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
