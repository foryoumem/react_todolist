import { configureStore } from "@reduxjs/toolkit";
import { todolistSlice } from "../redux/todolist/todolistSlice";

export default configureStore({
    reducer: {
        todolist: todolistSlice.reducer,
    },
})