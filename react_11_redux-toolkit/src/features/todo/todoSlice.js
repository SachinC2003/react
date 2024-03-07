import {createSlice, nonid} from '@reduxjs/toolkit'

const initialState = {
    todos : [{id : 1, text : "sachin"}]
}

export const todoSlice = createSlice({
    initialState,
    name : 'todo',
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
