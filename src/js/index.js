import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import toDoApp from './reducers/toDoApp'
import App from './components/App'

const store = createStore(toDoApp, window.devToolsExtension && window.devToolsExtension()
    );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
