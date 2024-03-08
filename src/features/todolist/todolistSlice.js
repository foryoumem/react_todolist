import { createSlice } from "@reduxjs/toolkit"

export const todolistSlice = createSlice({
    name: "todolist",
    initialState: {
        value: [],
    },
    reducers: {
        todoAdd: (state, action) => {
            console.log("reducer: add")
        },
        todoDelete: (state, action) => {
            console.log("reducer: delete")
        },
        todoCheck: (state, action) => {
            console.log("reducer: check")
        },
    },
})

export const { todoAdd, todoDelete, todoCheck } = todolistSlice.actions

export default todolistSlice.reducer