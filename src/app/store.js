import { configureStore } from "@reduxjs/toolkit";
import { todolistSlice } from "../features/todolist/todolistSlice";

export default configureStore({
    reducer: {
        todolist: todolistSlice.reducer,
    },
})