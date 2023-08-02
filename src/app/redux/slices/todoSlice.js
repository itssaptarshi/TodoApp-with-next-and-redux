import { createSlice } from "@reduxjs/toolkit";

const todoList = localStorage.getItem('list') !== null? JSON.parse(localStorage.getItem('list')):[] 


const initialState = {
  todos: todoList,
};

const todoSlice = createSlice({
  name: "todoslice",
  initialState: initialState,
  reducers: {
    addTodos(state, action) {
        state.todos.push(action.payload)
        localStorage.setItem('list', JSON.stringify(state.todos.map(item => item)))
    },
    deleteTodo: (state, action) => {
        const newItems = state.todos.filter((item,index)=>{
            return index !== action.payload
        })
        state.todos = newItems
        localStorage.setItem('list', JSON.stringify(state.todos.map(item => item)))
    },
  },
});

export const { addTodos, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
