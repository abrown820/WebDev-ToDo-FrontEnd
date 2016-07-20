// import react, react-redux and app + utils
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import TodoApp from './components/TodoApp'
import LoginPage from './components/LoginPage'

require("../styles/styles.scss");
// import store, reducer and apply middleware
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import toDoAppReducer from './reducers/Reducers'

// react router
import { browserHistory, Router, Route, Link } from 'react-router';
import { syncHistoryWithStore, routerReducer, push, routerMiddleware} from 'react-router-redux'

// Configure saga middleware and store
// const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers({toDoAppReducer,
  routing: routerReducer}),
  compose(applyMiddleware(thunk,routerMiddleware(browserHistory)), window.devToolsExtension ?
  window.devToolsExtension() : f => f))

  const history = syncHistoryWithStore(browserHistory, store);

// render app
render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={LoginPage}/>
      <Route path="todo" component={TodoApp}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
