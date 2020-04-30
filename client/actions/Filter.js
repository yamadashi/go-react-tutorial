export const ActionTypes = {
    CHANGE_FILTER: 'CAHNGE_FILTER'
}

export const Actions = {
    changeFilter: selectedIndex => ({
        type: ActionTypes.CHANGE_FILTER,
        payload: {
            selectedIndex
        }
    })
}