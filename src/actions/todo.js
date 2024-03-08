export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const CHECK_TODO = "CHECK_TODO"

export function addTodo(payload){
    return {
        type: ADD_TODO,
        payload
    }
}

export function deleteTodo(payload) {
    return {
        type: DELETE_TODO,
        payload
    }
}

export function checkTodo(payload) {
    return {
        type: CHECK_TODO,
        payload
    }
}