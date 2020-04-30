import { ActionTypes } from '../actions/Todo';

// これはここに書いておくものなの？
const initialState = {
    todos: [],
    nextID: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TODO:
            const newTodo = {
                id: state.nextID,
                text: action.payload.text,
                completed: false
            }
            return {
                ...state,
                todos: [...state.todos, newTodo],
                nextID: state.nextID+1
            }
        case ActionTypes.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        case ActionTypes.TOGGLE_TODO:
            return {
                ...state,
                todos : state.todos.map(todo => {
                    if (todo.id == action.payload.id) {
                        return { ...todo, completed: action.payload.completed }
                    }
                    return todo;
                })
            }
        default:
            return state
    }
}