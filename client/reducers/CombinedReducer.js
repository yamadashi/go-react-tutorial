import { combineReducers } from 'redux'
import TodoReducer from './TodoReducer'
import FilterReducer from './FilterReducer'

export default combineReducers({
    todo: TodoReducer,
    filter: FilterReducer
})