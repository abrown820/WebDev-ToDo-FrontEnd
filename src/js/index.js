// import react, react-redux and app + utils
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

// import store, reducer and apply middleware
import {createStore, applyMiddleware} from 'redux'
import toDoAppReducer from './reducers/Reducers'

// import sagas and middleware
import rootSaga from './sagas/sagas'
import createSagaMiddleware from 'redux-saga'

// Configure saga middleware and store
const sagaMiddleware = createSagaMiddleware()
const store = createStore(toDoAppReducer, applyMiddleware(sagaMiddleware),
 window.devToolsExtension && window.devToolsExtension());
sagaMiddleware.run(rootSaga)

// render app
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
