import { createStore, applyMiddleware, compose } from 'redux';
import toDoApp from '../reducers/toDoApp.js';
let store = createStore(toDoApp, window.STATE_FROM_SERVER);
