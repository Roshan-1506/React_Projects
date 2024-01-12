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
            state.todos.push(todo)    // updating the state
        },

        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id == action.payload)
        }
    }
})

export const {addTodo , removeTodo} =   todoSlice.actions

export default todoSlice.reducer                                