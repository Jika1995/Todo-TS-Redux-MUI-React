import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ITodo } from '../../interfaces'

// Define a type for the slice state
interface TodosState {
    data: ITodo[]
}

// Define the initial state using that type
const initialState: TodosState = {
    data: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<ITodo>) {
            state.data.push(action.payload)
        },
        deleteTodo(state, action: PayloadAction<ITodo["id"]>) {
            state.data = state.data.filter(item => item.id !== action.payload);
        },
        updateTodo(state, action: PayloadAction<ITodo>) {
            state.data = state.data.map(item => item.id === action.payload.id ? action.payload : item)
        }
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions