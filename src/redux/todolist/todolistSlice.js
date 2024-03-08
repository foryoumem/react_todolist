import { createSlice } from "@reduxjs/toolkit"

export const todolistSlice = createSlice({
    name: "todolist",
    initialState: {
        value: [],
    },
    reducers: {
        todoAdd: (state, action) => {
            console.log("reducer: add")
            state.value = [...state.value, action.payload]
        },
        todoDelete: (state, action) => {
            console.log("reducer: delete")
            state.value = state.value.filter(item => item.id !== action.payload)
        },
        todoCheck: (state, action) => {
            console.log("reducer: check")
            state.value = state.value.map(item => item.id === action.payload.id ? action.payload : item)
        },
    },
})

export const { todoAdd, todoDelete, todoCheck } = todolistSlice.actions

export default todolistSlice.reducer