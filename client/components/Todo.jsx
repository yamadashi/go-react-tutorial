import React from 'react'
import { connect } from 'react-redux'
import { Actions } from '../actions/Todo'
import { filterTypes } from '../constants/FilterConstants'

const Todo = props => {
    const filterFunc = todo => {
        switch(props.filter) {
            case filterTypes.ALL:
                return true
            case filterTypes.NOT_YET:
                return !todo.completed
            case filterTypes.DONE:
                return todo.completed
        }
    }
    const todos = props.todos.filter(todo =>
        filterFunc(todo)
    ).map(todo => 
        <li key={todo.id}>
            <input type='button' value='削除' onClick={() => { props.onTodoRemove(todo.id) }} />
            {todo.text}
            <input type='checkbox' checked={todo.completed?'checked':''} onChange={e => props.onTodoToggle(todo.id, e.target.checked)} />
        </li>
    )

    return (
        <div>
            {todos}
            <input type='text' id='newTodoTxt' />
            <input type='button' value='追加' onClick={() => {
                const newTodoTxt = document.getElementById('newTodoTxt')
                props.onTodoAdd(newTodoTxt.value)
                newTodoTxt.value = ''
            }} />
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todo.todos,
    filter: state.filter.selected
})

const mapDispatchToProps = dispatch => ({
    onTodoAdd: text => { dispatch(Actions.addTodo(text)) },
    onTodoRemove: id => { dispatch(Actions.removeTodo(id)) },
    onTodoToggle: (id, completed) => { dispatch(Actions.toggleTodo(id, completed)) }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)