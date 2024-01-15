import { createSlice , nanoid } from "@reduxjs/toolkit";

// first make initial state
const initialState = {
    todos : [{id : 1 , text : "Hello World"}]
}

// creating a slice , it has => name , initial state , reducers
export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {                         // reducers consist => properties and functions
        addTodo : (state , action) => {     
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)    // taking initialState todos here and updating the state  
        },

        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)   // filter always gives true value     
        }
    }
})

// we are accessing individual funtionality here bcoz it will help us in component
export const {addTodo , removeTodo} =   todoSlice.actions // we get values from actions

export default todoSlice.reducer                                