import { createContext , useContext } from "react";

// creating a context
export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "todo msg",
            completed : false,
        }
    ], 
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})

// consuming the context value 
export const useTodo = () => {
    return useContext(TodoContext)
}

// providing the context value
export const TodoProvider = TodoContext.Provider 