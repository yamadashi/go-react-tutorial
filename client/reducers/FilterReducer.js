import { ActionTypes } from '../actions/Filter';
import { filterTypes, filterArray } from '../constants/FilterConstants'

const initialState = {
    selected: filterTypes.ALL
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.CHANGE_FILTER:
            return {
                ...state,
                selected: filterArray[action.payload.selectedIndex]
            }
        default:
            return state
    }
}