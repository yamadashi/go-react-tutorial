import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import CombinedReducer from  '../reducers/CombinedReducer'

import Root from '../components/Root'

const store = createStore(CombinedReducer)

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
)