import { ADD_TODO, DELETE_TODO, CHECK_TODO } from '../actions/todo'

const todo = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ]
        case DELETE_TODO:
            return state.filter(item => item.id !== action.payload)

        case CHECK_TODO:
            return state.map(item => item.id === action.payload.id ? action.payload : item)

        default:
            return state
    }
}


export default todo