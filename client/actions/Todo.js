export const ActionTypes = {
    ADD_TODO: "ADD_TODO",
    REMOVE_TODO: "REMOVE_TODO",
    TOGGLE_TODO: "TOGGLE_TODO",
}

export const Actions = {
    addTodo: text => ({
        type: ActionTypes.ADD_TODO,
        payload: {
            text
        }
    }),
    removeTodo: id => ({
        type: ActionTypes.REMOVE_TODO,
        payload: {
            id
        }
    }),
    toggleTodo: (id, completed) => ({
        type: ActionTypes.TOGGLE_TODO,
        payload: {
            id,
            completed
        }
    })
}